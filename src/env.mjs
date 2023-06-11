import { z } from "zod"

const envSchema = z.object({
    NODE_ENV: z.enum(["development", "test", "production"]),
    AIRTABLE_KEY: z.string(),
    AIRTABLE_BASE_ID: z.string(),
    AIRTABLE_REDIRECTS_TABLE_ID: z.string(),
    CANONICAL_BASE_URL: z.string().url(),
})

/**
 * @type {Record<keyof z.infer<typeof envSchema>, string | undefined>}
 */
const processEnv = {
    NODE_ENV: process.env.NODE_ENV ?? "production",
    AIRTABLE_KEY: process.env.AIRTABLE_KEY,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
    AIRTABLE_REDIRECTS_TABLE_ID: process.env.AIRTABLE_REDIRECTS_TABLE_ID,
    CANONICAL_BASE_URL: process.env.CANONICAL_BASE_URL,
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

export { env }
