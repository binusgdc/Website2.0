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
            { method: "POST", handler: this.defaultHandlePost },
            { method: "PUT", handler: this.defaultHandlePut },
            { method: "DELETE", handler: this.defaultHandleDelete },
        ]
    }

    protected static override getModelledObject() {
        return Testimony
    }
}

export default TestimonyApiHandler.handle.bind(TestimonyApiHandler)
