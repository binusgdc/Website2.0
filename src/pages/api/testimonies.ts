import { NextApiRequest, NextApiResponse } from "next"

import { TemplateApiHandler } from "../../templates/template-api-path"

import Testimony from "../../model/testimony"

class TestimonyApiHandler extends TemplateApiHandler {
    public static override handle(req: NextApiRequest, res: NextApiResponse) {
        super.handle(req, res)
    }

    protected static override getExpectedContentType() {
        return "application/json"
    }

    protected static override getAcceptableMethods() {
        return [
            { method: "POST", handler: this.defaultHandlePost.bind(TestimonyApiHandler) },
            { method: "PUT", handler: this.defaultHandlePut.bind(TestimonyApiHandler) },
            { method: "DELETE", handler: this.defaultHandleDelete.bind(TestimonyApiHandler) },
        ]
    }

    protected static override getModelledObject() {
        return Testimony
    }
}

export default TestimonyApiHandler.handle.bind(TestimonyApiHandler)
