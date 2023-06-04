import { NextRequest, NextResponse } from "next/server"
import { env } from "./env.mjs"

export default async function middleware(req: NextRequest) {
    const prefix = "/go"
    if (req.nextUrl.pathname.startsWith(prefix)) {
        const redirect = await fetch(
            `${env.CANONICAL_BASE_URL}/api/redirects/${encodeURIComponent(
                req.nextUrl.pathname.slice(prefix.length)
            )}`
        )
        if (redirect.status === 200) {
            const { targetUrl } = await redirect.json()
            if (typeof targetUrl === "string") {
                return NextResponse.redirect(targetUrl)
            }
        }
    }
}
