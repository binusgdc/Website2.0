import Airtable from "airtable"
import { AirtableBase } from "airtable/lib/airtable_base"
import { env } from "../env.mjs"

export type Redirect = {
    sourcePath: string
    targetUrl: URL
}

export interface RedirectsData {
    createIfNotExists(redirect: Redirect): Promise<boolean>
    getAll(): Promise<Redirect[]>
    getForPath(sourcePath: string): Promise<Redirect | undefined>
    removeIfExists(sourcePath: string): Promise<void>
}

export interface RedirectsAuthData {
    containsEmail(emailAddress: string): Promise<boolean>
}

export class RedirectsService {
    private readonly redirects: RedirectsData
    private readonly redirectsAuth: RedirectsAuthData

    constructor(data: RedirectsData, redirectsAuth: RedirectsAuthData) {
        this.redirects = data
        this.redirectsAuth = redirectsAuth
    }
    async getRedirectFor(sourcePath: string): Promise<Redirect | undefined> {
        return await this.redirects.getForPath(sourcePath)
    }
    async getAllRedirects(): Promise<Redirect[]> {
        return await this.redirects.getAll()
    }
    async emailIsAuthorized(emailAddress: string): Promise<boolean> {
        return await this.redirectsAuth.containsEmail(emailAddress)
    }
}

export class RedirectsInMemory implements RedirectsData {
    private readonly cache: Map<string, Redirect>

    constructor() {
        this.cache = new Map()
    }
    createIfNotExists(redirect: Redirect): Promise<boolean> {
        if (this.cache.has(redirect.sourcePath)) {
            return Promise.resolve(false)
        }
        this.cache.set(redirect.sourcePath, redirect)
        return Promise.resolve(true)
    }
    getAll(): Promise<Redirect[]> {
        return Promise.resolve(Array.from(this.cache.values()))
    }
    getForPath(sourcePath: string): Promise<Redirect | undefined> {
        return Promise.resolve(this.cache.get(sourcePath))
    }
    removeIfExists(sourcePath: string): Promise<void> {
        this.cache.delete(sourcePath)
        return Promise.resolve()
    }
}

export class RedirectsAirtable implements RedirectsData, RedirectsAuthData {
    private readonly base: AirtableBase
    private readonly redirectsTableId: string
    private readonly authTableId: string
    constructor(base: AirtableBase, redirectsTableId: string, authTableId: string) {
        this.base = base
        this.redirectsTableId = redirectsTableId
        this.authTableId = authTableId
    }
    async containsEmail(emailAddress: string): Promise<boolean> {
        const recordResult = await this.base(this.authTableId)
            .select({
                filterByFormula: `{Email Address} = '${emailAddress}'`,
                maxRecords: 1,
            })
            .all()
        return recordResult.length === 1
    }
    async removeIfExists(sourcePath: string): Promise<void> {
        const recordToRemoveResult = await this.base(this.redirectsTableId)
            .select({
                filterByFormula: `{Source Path} = '${sourcePath}'`,
                maxRecords: 1,
            })
            .all()
        if (recordToRemoveResult.length !== 1) {
            throw new Error("Expected exactly one record to match the source path")
        }
        await this.base(this.redirectsTableId).destroy(recordToRemoveResult[0].id)
    }
    async createIfNotExists(redirect: Redirect): Promise<boolean> {
        const existingRedirect = await this.getForPath(redirect.sourcePath)
        if (existingRedirect) {
            return false
        }
        await this.base(this.redirectsTableId).create([
            {
                fields: {
                    "Source Path": redirect.sourcePath,
                    "Target URL": redirect.targetUrl.toString(),
                },
            },
        ])
        return true
    }
    async getAll(): Promise<Redirect[]> {
        const records = await this.base(this.redirectsTableId).select().all()
        return records.map(this.parseRedirectRecord)
    }
    async getForPath(sourcePath: string): Promise<Redirect | undefined> {
        const recordResult = await this.base(this.redirectsTableId)
            .select({
                filterByFormula: `{Source Path} = '${sourcePath}'`,
            })
            .all()
        if (recordResult.length === 0) {
            return undefined
        }
        if (recordResult.length > 1) {
            throw new Error("Expected at most one record to match the source path")
        }
        return this.parseRedirectRecord(recordResult[0])
    }

    private parseRedirectRecord(record: any): Redirect {
        const sourcePath = record.get("Source Path")?.toString()
        const targetUrl = record.get("Target Url")?.toString()
        if (!sourcePath || !targetUrl) {
            throw new Error(
                "Expected | Source Path | and | Target URL | to be string-interpretable fields"
            )
        }
        return {
            sourcePath: sourcePath,
            targetUrl: targetUrl,
        }
    }
}

const base = new Airtable({ apiKey: env.AIRTABLE_KEY }).base(env.AIRTABLE_BASE_ID as string)
const redirectsData: RedirectsAirtable = new RedirectsAirtable(
    base,
    env.AIRTABLE_REDIRECTS_TABLE_ID,
    env.AIRTABLE_AUTHORIZED_TABLE_ID
)
export const redirectsService = new RedirectsService(redirectsData, redirectsData)
