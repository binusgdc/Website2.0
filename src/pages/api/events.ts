import { NextApiRequest, NextApiResponse } from "next"

import connect from "../../libs/database"

import Event, { eventSchemaKeys } from "../../model/event"

interface PackedRequestData {
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

const enum ContentType {
    JSON = "application/json",
    PLAINTEXT = "text/plain",
}

function checkRequestHeader(r: PackedRequestData, contentType: ContentType) {
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

function printRequest(r: PackedRequestData) {
    const { client, req } = r

    console.log(`[${client}]'s Request Header:\n\n${JSON.stringify(req.headers, null, 4)}\n`)
    console.log(`[${client}]'s Request Body:\n\n${JSON.stringify(req.body, undefined, 4)}\n`)
}

function respond(r: PackedRequestData, code: number) {
    const { client, res } = r

    console.log(`[${client}] is to be responded with: ${HRC[code]}`)
    res.status(code).end()
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connect()

    const client = `${req.socket.remoteAddress}:${req.socket.remotePort}`
    console.log(`[${client}] says ${req.method} to ${req.url}`)

    const r: PackedRequestData = { client, req, res }
    const resp = (code: number) => {
        respond(r, code)
    }

    switch (req.method) {
        case "POST":
            {
                if (!checkRequestHeader(r, ContentType.JSON)) return
                printRequest(r)

                if (typeof req.body.id !== "string") {
                    console.log(
                        `[${client}]'s Request Body is malformed:\n\n> id field must be a single Event ID, which has the format /^E\\d+$/g\n`
                    )
                    resp(400)
                    return
                }

                if ((await Event.find({ id: req.body.id }).lean()).length > 0) {
                    console.log(
                        `[${client}]'s request to POST id ${req.body.id} cannot be fulfilled because it already exists`
                    )
                    resp(409)
                    return
                }

                try {
                    await Event.create(req.body)
                } catch (err: any) {
                    console.log(`[${client}]'s Request Body is malformed:\n\n> ${err.message}\n`)
                    resp(400)
                    return
                }

                console.log(`[${client}]'s request has been fulfilled`)
                resp(201)
                return
            }
            break

        case "PUT":
            {
                if (!checkRequestHeader(r, ContentType.JSON)) return
                printRequest(r)

                if (typeof req.body.id !== "string") {
                    console.log(
                        `[${client}]'s Request Body is malformed:\n\n> id field must be a single Event ID, which has the format /^E\\d+$/g\n`
                    )
                    resp(400)
                    return
                }

                const reqBodyKeys = Object.keys(req.body)
                console.log(reqBodyKeys)
                console.log(eventSchemaKeys)
                const illegalBodyHandler = () => {
                    console.log(
                        `[${client}]'s Request Body is malformed:\n\n> Request body is missing required properties or contains illegal properties\n`
                    )
                    resp(400)
                }

                if (reqBodyKeys.length !== eventSchemaKeys.length) {
                    illegalBodyHandler()
                    return
                }

                for (let i = 0; i < eventSchemaKeys.length; i++) {
                    if (!eventSchemaKeys.includes(reqBodyKeys[i])) {
                        illegalBodyHandler()
                        return
                    }
                }

                const { matchedCount, modifiedCount } = await Event.updateMany(
                    { id: req.body.id },
                    { $set: req.body },
                    { runValidators: true }
                )

                if (matchedCount <= 0) {
                    console.log(
                        `[${client}]'s request to PUT id ${req.body.id} failed because it does not exist`
                    )
                    resp(404)
                    return
                }

                if (matchedCount !== modifiedCount) {
                    console.log(
                        `[${client}]'s request to PUT id ${req.body.id} succeeded but did not modify anything`
                    )
                    resp(200)
                    return
                }

                console.log(`[${client}]'s request has been fulfilled`)
                resp(200)
                return
            }
            break

        case "DELETE":
            {
                if (!checkRequestHeader(r, ContentType.JSON)) return
                printRequest(r)

                if (typeof req.body.id !== "string") {
                    console.log(
                        `[${client}]'s Request Body is malformed:\n\n> id field must be a single Event ID, which has the format /^E\\d+$/g\n`
                    )
                    resp(400)
                    return
                }

                const { deletedCount } = await Event.deleteMany({ id: req.body.id })
                if (~~deletedCount <= 0) {
                    console.log(
                        `[${client}]'s request to DELETE id ${req.body.id} failed because it does not exist`
                    )
                    resp(404)
                    return
                }

                console.log(`[${client}]'s request has been fulfilled`)
                resp(200)
                return
            }
            break

        default:
            {
                console.log(`[${client}] asked to ${req.method}, which is illegal here`)
                resp(405)
                return
            }
            break
    }
}
