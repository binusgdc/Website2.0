import { NextApiRequest, NextApiResponse } from "next"
import { Redirect, redirectsService } from "../../../lib/redirect"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Redirect | { error: string }>
) {
    if (req.method !== "GET") {
        return res.status(405).send({ error: "Method Not Allowed" })
    }
    if (redirectsService === undefined) {
        return res.status(404).send({ error: "Redirect Not Found" })
    }
    const sourcePath = req.query.sourcePath

    if (typeof sourcePath !== "string") {
        return res.status(400)
    }
    const result = await redirectsService.getRedirectFor(sourcePath)
    return result
        ? res.status(200).json(result)
        : res.status(404).json({ error: "Redirect Not Found" })
}
