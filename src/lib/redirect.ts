import Airtable from "airtable"
import { AirtableBase } from "airtable/lib/airtable_base"
import { env } from "../env.mjs"

export type Redirect = {
    sourcePath: string
    targetUrl: URL
}

interface RedirectsData {
    getAll(): Promise<Redirect[]>
    getForPath(sourcePath: string): Promise<Redirect | undefined>
}

export class RedirectsService {
    private readonly redirects: RedirectsData

    constructor(data: RedirectsData) {
        this.redirects = data
    }
    async getRedirectFor(sourcePath: string): Promise<Redirect | undefined> {
        return await this.redirects.getForPath(sourcePath)
    }
    async getAllRedirects(): Promise<Redirect[]> {
        return await this.redirects.getAll()
    }
}

export class RedirectsInMemory implements RedirectsData {
    private readonly cache: Map<string, Redirect>

    constructor() {
        this.cache = new Map()
    }
    getAll(): Promise<Redirect[]> {
        return Promise.resolve(Array.from(this.cache.values()))
    }
    getForPath(sourcePath: string): Promise<Redirect | undefined> {
        return Promise.resolve(this.cache.get(sourcePath))
    }
}

export class RedirectsAirtable implements RedirectsData {
    private readonly base: AirtableBase
    private readonly redirectsTableId: string
    constructor(base: AirtableBase, redirectsTableId: string) {
        this.base = base
        this.redirectsTableId = redirectsTableId
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
        return this.parseRedirectRecord(recordResult[0])
    }

    private parseRedirectRecord(record: any): Redirect {
        try {
            const sourcePath = record.get("Source Path")?.toString()
            const targetUrl = record.get("Target Url")?.toString()
            if (!sourcePath || !targetUrl) {
                throw {}
            }
            return {
                sourcePath: sourcePath,
                targetUrl: targetUrl,
            }
        } catch (_) {
            throw new Error(
                `Expected "Source Path" and "Target URL" to be string-interpretable fields on the base.`
            )
        }
    }
}

const base = new Airtable({ apiKey: env.AIRTABLE_KEY }).base(env.AIRTABLE_BASE_ID)
const redirectsData: RedirectsAirtable = new RedirectsAirtable(
    base,
    env.AIRTABLE_REDIRECTS_TABLE_ID
)
export const redirectsService = new RedirectsService(redirectsData)
