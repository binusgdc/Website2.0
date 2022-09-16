import { NextApiRequest, NextApiResponse } from "next"

import {
    checkRequestHeader,
    ContentType,
    greet,
    PackedRequestData,
    printRequest,
    respond,
} from "../../libs/apiHandling"
import connect from "../../libs/database"

import Event, { eventSchemaKeys } from "../../model/event"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connect()

    const client = `${req.socket.remoteAddress}:${req.socket.remotePort}`
    const r: PackedRequestData = { client, req, res }
    const resp = (code: number) => {
        respond(r, code)
    }

    greet(r)

    switch (req.method) {
        case "POST":
            {
                if (!checkRequestHeader(r, ContentType.JSON)) return
                printRequest(r)

                if (typeof req.body._id !== "string") {
                    console.log(
                        `[${client}]'s Request Body is malformed:\n\n> _id field must be a single Event ID, which has the format /^E\\d+$/g\n`
                    )
                    resp(400)
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

                if (typeof req.body._id !== "string") {
                    console.log(
                        `[${client}]'s Request Body is malformed:\n\n> _id field must be a single Event ID, which has the format /^E\\d+$/g\n`
                    )
                    resp(400)
                    return
                }

                const reqBodyKeys = Object.keys(req.body)
                for (let i = 0; i < reqBodyKeys.length; i++) {
                    if (!eventSchemaKeys.includes(reqBodyKeys[i])) {
                        console.log(
                            `[${client}]'s Request Body is malformed:\n\n> Request body is missing required properties\n`
                        )
                        resp(400)
                        return
                    }
                }

                const { matchedCount, modifiedCount } = await Event.updateMany(
                    { _id: req.body._id },
                    { $set: req.body },
                    { runValidators: true }
                )

                if (matchedCount <= 0) {
                    console.log(
                        `[${client}]'s request to PUT _id ${req.body._id} failed because it does not exist`
                    )
                    resp(404)
                    return
                }

                if (matchedCount !== modifiedCount) {
                    console.log(
                        `[${client}]'s request to PUT _id ${req.body._id} succeeded but did not modify anything`
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

                if (typeof req.body._id !== "string") {
                    console.log(
                        `[${client}]'s Request Body is malformed:\n\n> _id field must be a single Event ID, which has the format /^E\\d+$/g\n`
                    )
                    resp(400)
                    return
                }

                const { deletedCount } = await Event.deleteMany({ _id: req.body._id })
                if (~~deletedCount <= 0) {
                    console.log(
                        `[${client}]'s request to DELETE _id ${req.body._id} failed because it does not exist`
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
