import { NextApiRequest, NextApiResponse } from "next"

import {
    checkRequestBody,
    checkRequestHeader,
    checkSuppliedId,
    ContentType,
    greet,
    PackedRequestData,
    printRequest,
    respond,
    sendGenericMalformedRequestBodyResponse,
    sendIllegalMethodResponse,
    sendMultipleSuppliedIdsErrorResponse,
    sendUpdateResultResponse,
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

                if (!checkSuppliedId(r)) {
                    sendMultipleSuppliedIdsErrorResponse(r, "Event", "/^E\\d+$/g")
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

                if (!checkSuppliedId(r)) {
                    sendMultipleSuppliedIdsErrorResponse(r, "Event", "/^E\\d+$/g")
                    return
                }

                if (!checkRequestBody(r, eventSchemaKeys)) return

                try {
                    sendUpdateResultResponse(
                        r,
                        await Event.updateMany(
                            { _id: req.body._id },
                            { $set: req.body },
                            { runValidators: true }
                        )
                    )
                } catch (err: any) {
                    sendGenericMalformedRequestBodyResponse(r, err.message)
                    return
                }
            }
            break

        case "DELETE":
            {
                if (!checkRequestHeader(r, ContentType.JSON)) return
                printRequest(r)

                if (!checkSuppliedId(r)) {
                    sendMultipleSuppliedIdsErrorResponse(r, "Event", "/^E\\d+$/g")
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
            sendIllegalMethodResponse(r)
            break
    }
}
