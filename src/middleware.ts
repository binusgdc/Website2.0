import { NextRequest, NextResponse } from "next/server"

export default function middleware(req: NextRequest) {
    if (req.nextUrl.basePath.startsWith("/balls")) {
        NextResponse.redirect(new URL("https://www.google.com/"))
    }
}
