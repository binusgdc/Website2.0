import { z } from "zod"

const envSchema = z.object({
    NODE_ENV: z.enum(["development", "test", "production"]),
    NEXTAUTH_SECRET: z.string().optional(),
    ENABLE_REDIRECTS: z.enum(["true", "false"]).default("false"),
    CANONICAL_BASE_URL: z.string().url().optional(),
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

const err = []

if (env.NODE_ENV === "production" && env.NEXTAUTH_SECRET === undefined) {
    err.push(new Error("❌ Missing: NEXTAUTH_SECRET"))
}

if (env.ENABLE_REDIRECTS === "true") {
    const redirectErr = []
    if (!env.CANONICAL_BASE_URL) {
        redirectErr.push(new Error("❌ Missing: CANONICAL_BASE_URL"))
    }
    if (!env.AIRTABLE_KEY) {
        redirectErr.push(new Error("❌ Missing: AIRTABLE_KEY"))
    }
    if (!env.AIRTABLE_BASE_ID) {
        redirectErr.push(new Error("❌ Missing: AIRTABLE_BASE_ID"))
    }
    if (!env.AIRTABLE_REDIRECTS_TABLE_ID) {
        redirectErr.push(new Error("❌ Missing: AIRTABLE_REDIRECTS_TABLE_ID"))
    }
    if (!env.AIRTABLE_AUTHORIZED_TABLE_ID) {
        redirectErr.push(new Error("❌ Missing: AIRTABLE_AUTHORIZED_TABLE_ID"))
    }
    if (redirectErr.length > 0) {
        err.push(new Error("- Redirects are enabled but missing required environment variables"))
        err.push(...redirectErr)
    }
}

if (err.length > 0) {
    throw new Error(
        "Environment variables are invalid:\n" + err.map((e) => `${e.message}`).join("\n")
    )
}

console.log(env.NODE_ENV)

export { env }
