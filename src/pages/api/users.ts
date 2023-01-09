import { NextApiRequest, NextApiResponse } from "next"

import { TemplateApiHandler } from "../../templates/template-api-path"

import User from "../../model/user"

class UserApiHandler extends TemplateApiHandler {
    public static override handle(req: NextApiRequest, res: NextApiResponse) {
        super.handle(req, res)
    }

    protected static override getExpectedContentType() {
        return "application/json"
    }

    protected static override getAcceptableMethods() {
        return [
            { method: "POST", handler: this.defaultHandlePost.bind(UserApiHandler) },
            { method: "PUT", handler: this.defaultHandlePut.bind(UserApiHandler) },
            { method: "DELETE", handler: this.defaultHandleDelete.bind(UserApiHandler) },
        ]
    }

    protected static override getModelledObject() {
        return User
    }
}

export default UserApiHandler.handle.bind(UserApiHandler)
