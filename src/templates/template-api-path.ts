import { Error as MongooseError } from "mongoose"
import { NextApiRequest, NextApiResponse } from "next"

import connect from "../libs/database"
import ModelledObject from "./template-model"

const expectedContentType = "application/json"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const contentType = req.headers["content-type"]
    if (contentType !== expectedContentType) {
        res.status(415).json({
            status: "415 Unsupported Media Type",
            message: `Expecting Content-Type ${expectedContentType}, received ${contentType}`,
        })

        return
    }

    const method = req.method
    switch (method) {
        case "POST":
            await connect()

            try {
                await ModelledObject.create(req.body)

                res.status(201).json({
                    status: "201 Created",
                    message: "Successfully created object",
                    receivedData: req.body,
                })

                return
            } catch (err) {
                res.status(400).json({
                    status: "400 Bad Request",
                    message: (err as MongooseError).message,
                    receivedData: req.body,
                })

                return
            }

        case "PUT":
            await connect()

            try {
                const updateRes = await ModelledObject.updateOne({ _id: req.body._id }, req.body, {
                    runValidators: true,
                })

                if (updateRes.matchedCount < 1) {
                    res.status(404).json({
                        status: "404 Not Found",
                        message: `Cannot update non-existent id ${req.body._id}`,
                    })

                    return
                }

                if (updateRes.modifiedCount != updateRes.matchedCount) {
                    res.status(200).json({
                        status: "200 OK",
                        message: "Request succeeded but did not modify anything",
                    })

                    return
                }

                res.status(200).json({
                    status: "200 OK",
                    message: `Successfully updated id ${req.body._id}`,
                    receivedData: req.body,
                })

                return
            } catch (err) {
                res.status(400).json({
                    status: "400 Bad Request",
                    message: (err as MongooseError).message,
                    receivedData: req.body,
                })

                return
            }

        case "DELETE":
            await connect()

            try {
                const deleteRes = await ModelledObject.deleteOne({ _id: req.body._id })

                if (deleteRes.deletedCount < 1) {
                    res.status(404).json({
                        status: "404 Not Found",
                        message: `Cannot delete non-existent id ${req.body._id}`,
                    })

                    return
                }

                res.status(200).json({
                    status: "200 OK",
                    message: `Successfully deleted id ${req.body._id}`,
                })

                return
            } catch (err) {
                res.status(400).json({
                    status: "400 Bad Request",
                    message: (err as MongooseError).message,
                    receivedData: req.body,
                })

                return
            }

        default:
            res.status(405).json({
                status: "405 Method Not Allowed",
                message: `Acceptable request methods include POST, PUT, and DELETE respectively, received ${method}`,
            })

            return
    }
}
