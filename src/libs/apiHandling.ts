import { DeleteResult, UpdateResult } from "mongodb"
import { NextApiRequest, NextApiResponse } from "next"

import { log } from "../libs/logger"

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

    log(`[${client}] says ${req.method} to ${req.url}`)
}

export function printRequest(r: PackedRequestData) {
    const { client, req } = r

    log(`[${client}]'s Request Header:\n\n${JSON.stringify(req.headers, null, 4)}\n`)
    log(`[${client}]'s Request Body:\n\n${JSON.stringify(req.body, undefined, 4)}\n`)
}

export function checkRequestHeader(r: PackedRequestData, contentType: ContentType) {
    const { client, req } = r

    const requestContentType = req.headers["content-type"]
    if (requestContentType !== contentType) {
        const msg = `[${client}] sent "${requestContentType}", but we are expecting Content-Type "${contentType}"`
        const shortMsg = `Expecting Content-Type ${contentType}, got ${requestContentType}`

        log(msg)
        respond(r, 415, shortMsg)
        return false
    }

    return true
}

export function checkRequestBody(r: PackedRequestData, schemaKeys: string[]) {
    const { req } = r

    const reqBodyKeys = Object.keys(req.body)

    if (reqBodyKeys.length <= 0) {
        sendMissingOrIllegalBodyPropertiesResponse(r)
        return false
    }

    for (let i = 0; i < reqBodyKeys.length; i++) {
        if (!schemaKeys.includes(reqBodyKeys[i])) {
            sendMissingOrIllegalBodyPropertiesResponse(r)
            return false
        }
    }

    return true
}

export function checkSuppliedId(r: PackedRequestData) {
    const { req } = r

    return typeof req.body._id === "string"
}

export function respond(r: PackedRequestData, code: number, errMsg?: string) {
    const { client, res } = r

    const response = {
        response: HRC[code],
        msg: errMsg ? errMsg : "none",
    }

    log(`[${client}] is to be responded with: ${HRC[code]}`)
    res.status(code).json(response)
}

export function sendUpdateResultResponse(r: PackedRequestData, res: UpdateResult) {
    const { client, req } = r
    const { matchedCount, modifiedCount } = res

    if (matchedCount <= 0) {
        const msg = `[${client}]'s request to PUT _id ${req.body._id} failed because it does not exist`
        const shortMsg = `Cannot PUT non-existent _id ${req.body._id}`

        log(msg)
        respond(r, 404, shortMsg)
        return
    }

    if (matchedCount !== modifiedCount) {
        const msg = `[${client}]'s request to PUT _id ${req.body._id} succeeded but did not modify anything`
        const shortMsg = "Request succeeded but did not modify anything"

        log(msg)
        respond(r, 200, shortMsg)
        return
    }

    sendTotalSuccessResponse(r)
    respond(r, 200)
}

export function sendDeleteResultResponse(r: PackedRequestData, res: DeleteResult) {
    const { client, req } = r
    const { deletedCount } = res

    if (~~deletedCount <= 0) {
        const msg = `[${client}]'s request to DELETE _id ${req.body._id} failed because it does not exist`
        const shortMsg = `Cannot DELETE non-existent _id ${req.body._id}`

        log(msg)
        respond(r, 404, shortMsg)
        return
    }

    sendTotalSuccessResponse(r)
    respond(r, 200)
}

export function sendTotalSuccessResponse(r: PackedRequestData) {
    const { client } = r

    log(`[${client}]'s request has been fulfilled`)
}

export function sendMultipleSuppliedIdsErrorResponse(
    r: PackedRequestData,
    idType: string,
    idFormat: string
) {
    const { client } = r

    const msg = `[${client}]'s Request Body is malformed:\n\n> _id field must be a single ${idType} ID, which has the format ${idFormat}\n`
    const shortMsg = `Missing ${idType} ID _id (shell-escaped format: ${idFormat})`

    log(msg)
    respond(r, 400, shortMsg)
    return
}

export function sendGenericMalformedRequestBodyResponse(r: PackedRequestData, msg: string) {
    const { client } = r

    const errMsg = `[${client}]'s Request Body is malformed:\n\n> ${msg}\n`
    const shortErrMsg = `Request body is malformed: ${msg}`

    log(errMsg)
    respond(r, 400, shortErrMsg)
    return
}

function sendMissingOrIllegalBodyPropertiesResponse(r: PackedRequestData) {
    const { client } = r

    const msg = `[${client}]'s Request Body is malformed:\n\n> Request body is missing required properties or contains illegal properties\n`
    const shortMsg = "Request body is missing required properties or contains illegal properties"

    log(msg)
    respond(r, 400, shortMsg)
    return
}

export function sendIllegalMethodResponse(r: PackedRequestData) {
    const { client, req } = r

    const msg = `[${client}] asked to ${req.method}, which is illegal here`
    const shortMsg = `Request method ${req.method} is illegal here`

    log(msg)
    respond(r, 405, shortMsg)
    return
}
