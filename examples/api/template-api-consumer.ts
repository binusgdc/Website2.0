import { NextApiRequest, NextApiResponse } from "next"

import { TemplateApiHandler } from "../../src/templates/template-api-path"

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
            // bind is required since passing a function losses the this context, which is required here
            { method: "POST", handler: this.defaultHandlePost.bind(TemplateApiConsumerHandler) },
        ]
    }

    protected static override getModelledObject() {
        return TemplateApiConsumerModel
    }
}

// the this context is also lost here
export default TemplateApiConsumerHandler.handle.bind(TemplateApiConsumerHandler)
