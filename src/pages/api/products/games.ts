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
    sendDeleteResultResponse,
    sendGenericMalformedRequestBodyResponse,
    sendIllegalMethodResponse,
    sendMultipleSuppliedIdsErrorResponse,
    sendTotalSuccessResponse,
    sendUpdateResultResponse,
} from "../../../libs/apiHandling"
import connect from "../../../libs/database"

import Game, { gameSchemaKeys } from "../../../model/game"

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
                    sendMultipleSuppliedIdsErrorResponse(r, "Game", "/^G\\d+$/g")
                    return
                }

                try {
                    await Game.create(req.body)
                } catch (err: any) {
                    sendGenericMalformedRequestBodyResponse(r, err.message)
                    return
                }

                sendTotalSuccessResponse(r)
                resp(201)
                return
            }
            break

        case "PUT":
            {
                if (!checkRequestHeader(r, ContentType.JSON)) return
                printRequest(r)

                if (!checkSuppliedId(r)) {
                    sendMultipleSuppliedIdsErrorResponse(r, "Game", "/^G\\d+$/g")
                    return
                }

                if (!checkRequestBody(r, gameSchemaKeys)) return

                try {
                    sendUpdateResultResponse(
                        r,
                        await Game.updateMany(
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
                    sendMultipleSuppliedIdsErrorResponse(r, "Game", "/^G\\d+$/g")
                    return
                }

                sendDeleteResultResponse(r, await Game.deleteMany({ _id: req.body._id }))
                return
            }
            break

        default:
            sendIllegalMethodResponse(r)
            break
    }
}
