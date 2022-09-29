import { NextApiRequest, NextApiResponse } from "next"

import { TemplateApiHandler } from "../../templates/template-api-path"

import Event from "../../model/event"

class EventApiHandler extends TemplateApiHandler {
    public static override handle(req: NextApiRequest, res: NextApiResponse) {
        super.handle(req, res)
    }

    protected static override getExpectedContentType() {
        return "application/json"
    }

    protected static override getAcceptableMethods() {
        return [
            { method: "POST", handler: this.defaultHandlePost.bind(EventApiHandler) },
            { method: "PUT", handler: this.defaultHandlePut.bind(EventApiHandler) },
            { method: "DELETE", handler: this.defaultHandleDelete.bind(EventApiHandler) },
        ]
    }

    protected static override getModelledObject() {
        return Event
    }
}

export default EventApiHandler.handle.bind(EventApiHandler)
