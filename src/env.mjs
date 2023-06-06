import { z } from "zod"

const envSchema = z.object({
    NODE_ENV: z.enum(["development", "test", "production"]),
    NEXTAUTH_SECRET: z.string(),
    CANONICAL_BASE_URL: z.string().url(),
    ENABLE_REDIRECTS: z.enum(["true", "false"]).default("false"),
    AIRTABLE_KEY: z.string().optional(),
    AIRTABLE_BASE_ID: z.string().optional(),
    AIRTABLE_REDIRECTS_TABLE_ID: z.string().optional(),
    AIRTABLE_AUTHORIZED_TABLE_ID: z.string().optional(),
    GOOGLE_CLIENT_ID: z.string().optional(),
    GOOGLE_CLIENT_SECRET: z.string().optional(),
    DISCORD_CLIENT_ID: z.string().optional(),
    DISCORD_CLIENT_SECRET: z.string().optional(),
})

/**
 * @type {Record<keyof z.infer<typeof envSchema>, string | undefined>}
 */
const processEnv = {
    NODE_ENV: process.env.NODE_ENV ?? "production",
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    ENABLE_REDIRECTS: process.env.ENABLE_REDIRECTS,
    CANONICAL_BASE_URL: process.env.CANONICAL_BASE_URL,
    AIRTABLE_KEY: process.env.AIRTABLE_KEY,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
    AIRTABLE_REDIRECTS_TABLE_ID: process.env.AIRTABLE_REDIRECTS_TABLE_ID,
    AIRTABLE_AUTHORIZED_TABLE_ID: process.env.AIRTABLE_AUTHORIZED_TABLE_ID,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
    DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
}

/** @typedef {z.input<typeof envSchema>} Input */
/** @typedef {z.infer<typeof envSchema>} Output */
/** @typedef {z.SafeParseReturnType<Input, Output>} SafeParseReturn */

const parsed = /** @type {SafeParseReturn} */ (envSchema.safeParse(processEnv))

if (!parsed.success) {
    console.error("❌ Invalid environment variables:", parsed.error.flatten().fieldErrors)
    throw new Error("Invalid environment variables")
}

const env = parsed.data

if (env.ENABLE_REDIRECTS === "true") {
    const err = []
    if (!env.AIRTABLE_KEY) {
        err.push(new Error("Missing: AIRTABLE_KEY"))
    }
    if (!env.AIRTABLE_BASE_ID) {
        err.push(new Error("Missing: AIRTABLE_BASE_ID"))
    }
    if (!env.AIRTABLE_REDIRECTS_TABLE_ID) {
        err.push(new Error("Missing: AIRTABLE_REDIRECTS_TABLE_ID"))
    }
    if (!env.AIRTABLE_AUTHORIZED_TABLE_ID) {
        err.push(new Error("Missing: AIRTABLE_AUTHORIZED_TABLE_ID"))
    }
    if (err.length > 0) {
        throw new Error(
            'Redirects are enabled but missing required environment variables": \n' +
                err.map((e) => `❌ ${e.message}`).join("\n")
        )
    }
}

export { env }
