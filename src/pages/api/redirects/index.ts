import { NextApiRequest, NextApiResponse } from "next"
import { Redirect, redirectsService } from "../../../lib/redirect"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Redirect[] | { error: string }>
) {
    if (req.method !== "GET") {
        return res.status(404)
    }
    try {
        const redirects = await redirectsService.getAllRedirects()
        return res.status(200).json(redirects)
    } catch (error: any) {
        return res.status(500).json({ error: error["message"] ?? "Unknown Error" })
    }
}
