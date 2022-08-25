import { NextApiRequest, NextApiResponse } from "next"

import connect from "../../libs/databse"
import User from "../../model/user"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connect()
    if (req.method === "POST") {
        const user = await User.create(req.body)
        res.status(201).json({ status: "OK", data: user })
    } else if (req.method === "GET") {
        const users = await User.findOne({ handle: "@ganyuwangywangy" }, "-_id -__v").lean()
        console.log(users)
        res.status(200).json({ status: "OK" })
    } else if (req.method === "PUT") {
        const user = await User.updateOne(
            { handle: "asdads" },
            { handle: "asdasdasdads" },
            { upsert: true }
        )
        console.log(user)
        res.status(200).json({ status: "OK" })
    } else if (req.method === "DELETE") {
        const user = await User.deleteOne({ handle: "asdasdasdads" })
        console.log(user)
        res.status(200).json({ status: "OK" })
    }
}
