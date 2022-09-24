// import { NextApiRequest, NextApiResponse } from "next"

// import {
//     checkRequestBody,
//     checkRequestHeader,
//     checkSuppliedId,
//     ContentType,
//     greet,
//     PackedRequestData,
//     printRequest,
//     respond,
//     sendDeleteResultResponse,
//     sendGenericMalformedRequestBodyResponse,
//     sendIllegalMethodResponse,
//     sendMultipleSuppliedIdsErrorResponse,
//     sendTotalSuccessResponse,
//     sendUpdateResultResponse,
// } from "../../libs/apiHandling"
// import connect from "../../libs/database"

// import Event, { eventSchemaKeys } from "../../model/event"

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     await connect()

//     const client = `${req.socket.remoteAddress}:${req.socket.remotePort}`
//     const r: PackedRequestData = { client, req, res }
//     const resp = (code: number) => {
//         respond(r, code)
//     }

//     greet(r)

//     switch (req.method) {
//         case "POST":
//             {
//                 if (!checkRequestHeader(r, ContentType.JSON)) return
//                 printRequest(r)

//                 if (!checkSuppliedId(r)) {
//                     sendMultipleSuppliedIdsErrorResponse(r, "Event", "/^E\\d+$/g")
//                     return
//                 }

//                 try {
//                     await Event.create(req.body)
//                 } catch (err: any) {
//                     sendGenericMalformedRequestBodyResponse(r, err.message)
//                     return
//                 }

//                 sendTotalSuccessResponse(r)
//                 resp(201)
//                 return
//             }
//             break

//         case "PUT":
//             {
//                 if (!checkRequestHeader(r, ContentType.JSON)) return
//                 printRequest(r)

//                 if (!checkSuppliedId(r)) {
//                     sendMultipleSuppliedIdsErrorResponse(r, "Event", "/^E\\d+$/g")
//                     return
//                 }

//                 if (!checkRequestBody(r, eventSchemaKeys)) return

//                 try {
//                     sendUpdateResultResponse(
//                         r,
//                         await Event.updateMany(
//                             { _id: req.body._id },
//                             { $set: req.body },
//                             { runValidators: true }
//                         )
//                     )
//                 } catch (err: any) {
//                     sendGenericMalformedRequestBodyResponse(r, err.message)
//                     return
//                 }
//             }
//             break

//         case "DELETE":
//             {
//                 if (!checkRequestHeader(r, ContentType.JSON)) return
//                 printRequest(r)

//                 if (!checkSuppliedId(r)) {
//                     sendMultipleSuppliedIdsErrorResponse(r, "Event", "/^E\\d+$/g")
//                     return
//                 }

//                 sendDeleteResultResponse(r, await Event.deleteMany({ _id: req.body._id }))
//                 return
//             }
//             break

//         default:
//             sendIllegalMethodResponse(r)
//             break
//     }
// }
import { NextApiRequest, NextApiResponse } from "next"

import connect from "../../libs/database"

import Event from "../../model/event"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.headers["content-type"] !== "application/json")
        return res.status(415).json({ status: "error", msg: "Unsupported content type" })

    await connect()
    switch (req.method) {
        case "POST":
            try {
                const data = await Event.create(req.body)
                res.status(201).json({ status: "OK", msg: "Event created", data: data })
            } catch (err) {
                res.status(500).json({ status: "Error", msg: (err as Error).message })
            }
            return
        case "PUT":
            try {
                await Event.updateOne({ _id: req.body._id }, req.body, {
                    runValidators: true,
                })
                res.status(201).json({ status: "OK", data: req.body })
            } catch (err) {
                res.status(500).json({ status: "Error", msg: (err as Error).message })
            }
            return
        case "DELETE":
            try {
                await Event.deleteOne({ _id: req.body._id })
                res.status(201).json({ status: "OK", msg: "Event deleted" })
            } catch (err) {
                res.status(500).json({ status: "Error", msg: (err as Error).message })
            }
            return
    }
    return res.status(405).json({ status: "Error", msg: "Method not allowed" })
}
