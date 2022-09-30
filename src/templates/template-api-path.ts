import { Error as MongooseError, Model } from "mongoose"
import { NextApiRequest, NextApiResponse } from "next"

import connect from "../libs/database"

interface RequestMethodHandler {
    method: string
    handler: (req: NextApiRequest, res: NextApiResponse) => void
}

type MongooseModel = Model<any>

abstract class TemplateApiHandler {
    public constructor() {
        throw new Error("API Handlers are not instantiable")
    }

    public static handle(req: NextApiRequest, res: NextApiResponse) {
        const contentType = req.headers["content-type"]
        const expectedContentType = this.getExpectedContentType()
        if (contentType !== expectedContentType) {
            res.status(415).json({
                status: "415 Unsupported Media Type",
                message: `Expecting Content-Type ${expectedContentType}, received ${contentType}`,
            })

            return
        }

        const method = req.method as string
        const acceptableMethods = this.getAcceptableMethods()
        for (const acceptableMethod of acceptableMethods) {
            if (method === acceptableMethod.method) {
                acceptableMethod.handler(req, res)
                return
            }
        }

        this.handleUnknown(req, res)
    }

    protected static getExpectedContentType(): string {
        throw new Error("An override of this function is required")
    }

    protected static getAcceptableMethods(): RequestMethodHandler[] {
        throw new Error("An override of this function is required")
    }

    protected static getModelledObject(): MongooseModel {
        throw new Error("An override of this function is required")
    }

    protected static async defaultHandlePost(req: NextApiRequest, res: NextApiResponse) {
        await connect()

        try {
            await this.getModelledObject().create(req.body)

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
    }

    protected static async defaultHandlePut(req: NextApiRequest, res: NextApiResponse) {
        await connect()

        try {
            const updateRes = await this.getModelledObject().updateOne(
                { _id: req.body._id },
                req.body,
                {
                    runValidators: true,
                }
            )

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
    }

    protected static async defaultHandleDelete(req: NextApiRequest, res: NextApiResponse) {
        await connect()

        try {
            const deleteRes = await this.getModelledObject().deleteOne({ _id: req.body._id })

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
    }

    private static handleUnknown(req: NextApiRequest, res: NextApiResponse) {
        const acceptableMethods = this.getAcceptableMethods().map((am) => am.method)
        res.status(405).json({
            status: "405 Method Not Allowed",
            message: `Acceptable request methods include [${acceptableMethods}], received ${req.method}`,
        })

        return
    }
}

export { TemplateApiHandler }
