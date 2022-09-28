import { NextApiRequest, NextApiResponse } from "next"

import connect from "../../libs/database"

import User from "../../model/user"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.headers["content-type"] !== "application/json")
        return res.status(415).json({ status: "error", msg: "Unsupported content type" })

    await connect()
    switch (req.method) {
        case "POST":
            try {
                const data = await User.create(req.body)
                res.status(201).json({ status: "OK", msg: "Event created", data: data })
            } catch (err) {
                res.status(500).json({ status: "Error", msg: (err as Error).message })
            }
            return
        case "PUT":
            try {
                await User.updateOne({ _id: req.body._id }, req.body, {
                    runValidators: true,
                })
                res.status(201).json({ status: "OK", data: req.body })
            } catch (err) {
                res.status(500).json({ status: "Error", msg: (err as Error).message })
            }
            return
        case "DELETE":
            try {
                await User.deleteOne({ _id: req.body._id })
                res.status(201).json({ status: "OK", msg: "Event deleted" })
            } catch (err) {
                res.status(500).json({ status: "Error", msg: (err as Error).message })
            }
            return
    }
    return res.status(405).json({ status: "Error", msg: "Method not allowed" })
}
