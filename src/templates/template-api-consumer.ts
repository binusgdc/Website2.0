import { NextApiRequest, NextApiResponse } from "next"

import { TemplateApiHandler } from "./template-api-path"

import TemplateApiConsumerModel from "./template-api-consumer-model"

class TemplateApiConsumerHandler extends TemplateApiHandler {
    public static override handle(req: NextApiRequest, res: NextApiResponse) {
        super.handle(req, res)
    }

    protected static override getExpectedContentType() {
        return "text/plain"
    }

    protected static override getAcceptableMethods() {
        return [
            { method: "POST", handler: this.defaultHandlePost.bind(TemplateApiConsumerHandler) },
        ]
    }

    protected static override getModelledObject() {
        return TemplateApiConsumerModel
    }
}

export default TemplateApiConsumerHandler.handle.bind(TemplateApiConsumerHandler)
