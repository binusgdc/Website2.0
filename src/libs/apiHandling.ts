import { UpdateResult } from "mongodb"
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

export function checkRequestBody(r: PackedRequestData, schemaKeys: string[]) {
    const { req } = r

    const reqBodyKeys = Object.keys(req.body)

    if (reqBodyKeys.length <= 0) {
        sendMissingBodyPropertiesResponse(r)
        return false
    }

    for (let i = 0; i < reqBodyKeys.length; i++) {
        if (!schemaKeys.includes(reqBodyKeys[i])) {
            sendMissingBodyPropertiesResponse(r)
            return false
        }
    }

    return true
}

export function checkSuppliedId(r: PackedRequestData) {
    const { req } = r

    return typeof req.body._id === "string"
}

export function respond(r: PackedRequestData, code: number) {
    const { client, res } = r

    console.log(`[${client}] is to be responded with: ${HRC[code]}`)
    res.status(code).end()
}

export function sendUpdateResultResponse(r: PackedRequestData, res: UpdateResult) {
    const { client, req } = r
    const { matchedCount, modifiedCount } = res

    if (matchedCount <= 0) {
        console.log(
            `[${client}]'s request to PUT _id ${req.body._id} failed because it does not exist`
        )
        respond(r, 404)
        return
    }

    if (matchedCount !== modifiedCount) {
        console.log(
            `[${client}]'s request to PUT _id ${req.body._id} succeeded but did not modify anything`
        )
        respond(r, 200)
        return
    }

    sendTotalSuccessResponse(r)
}

function sendTotalSuccessResponse(r: PackedRequestData) {
    const { client, req } = r

    console.log(`[${client}]'s request has been fulfilled`)
    respond(r, 200)
}

export function sendMultipleSuppliedIdsErrorResponse(
    r: PackedRequestData,
    idType: string,
    idFormat: string
) {
    const { client } = r
    console.log(
        `[${client}]'s Request Body is malformed:\n\n> _id field must be a single ${idType} ID, which has the format ${idFormat}\n`
    )
    respond(r, 400)
    return
}

export function sendGenericMalformedRequestBodyResponse(r: PackedRequestData, msg: string) {
	const { client } = r

	console.log(`[${client}]'s Request Body is malformed:\n\n> ${msg}\n`)
	respond(r, 400)
	return
}

function sendMissingBodyPropertiesResponse(r: PackedRequestData) {
    const { client } = r

    console.log(
        `[${client}]'s Request Body is malformed:\n\n> Request body is missing required properties\n`
    )
    respond(r, 400)
    return
}

export function sendIllegalMethodResponse(r: PackedRequestData) {
    const { client, req } = r

    console.log(`[${client}] asked to ${req.method}, which is illegal here`)
    respond(r, 405)
    return
}
