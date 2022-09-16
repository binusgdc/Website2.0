import { NextApiRequest, NextApiResponse } from "next"

export interface PackedRequestData {
    client: string
    req: NextApiRequest
    res: NextApiResponse
}

/** HTTP Response Code-String Pair */
interface HttpResponseCodeStringPair {
    [key: number]: string
}

/** HTTP Response Code */
const HRC: HttpResponseCodeStringPair = {
    200: "200 OK",
    201: "201 Created",
    400: "400 Bad Request",
    404: "404 Not Found",
    405: "405 Method Not Allowed",
    409: "409 Conflict",
    415: "415 Unsupported Media Type",
}

export const enum ContentType {
    JSON = "application/json",
    PLAINTEXT = "text/plain",
}

export function greet(r: PackedRequestData) {
    const { client, req } = r

    console.log(`[${client}] says ${req.method} to ${req.url}`)
}

export function printRequest(r: PackedRequestData) {
    const { client, req } = r

    console.log(`[${client}]'s Request Header:\n\n${JSON.stringify(req.headers, null, 4)}\n`)
    console.log(`[${client}]'s Request Body:\n\n${JSON.stringify(req.body, undefined, 4)}\n`)
}

export function checkRequestHeader(r: PackedRequestData, contentType: ContentType) {
    const { client, req } = r

    const requestContentType = req.headers["content-type"]
    if (requestContentType !== contentType) {
        console.log(
            `[${client}] sent "${requestContentType}", but we are expecting Content-Type "${contentType}"`
        )
        respond(r, 415)
        return false
    }

    return true
}

export function respond(r: PackedRequestData, code: number) {
    const { client, res } = r

    console.log(`[${client}] is to be responded with: ${HRC[code]}`)
    res.status(code).end()
}
