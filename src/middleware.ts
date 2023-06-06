import { NextRequest, NextResponse } from "next/server"
import { env } from "./env.mjs"

export default async function middleware(req: NextRequest) {
    if (env.CANONICAL_BASE_URL !== undefined) {
        const redirect = await fetch(
            `${env.CANONICAL_BASE_URL}/api/redirects/${encodeURIComponent(
                req.nextUrl.pathname.slice("/link".length)
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

export const config = {
    matcher: "/link/:path*",
}
