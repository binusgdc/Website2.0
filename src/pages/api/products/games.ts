import { NextApiRequest, NextApiResponse } from "next"

import { TemplateApiHandler } from "../../../templates/template-api-path"

import Game from "../../../model/game"

class GameApiHandler extends TemplateApiHandler {
    public static override handle(req: NextApiRequest, res: NextApiResponse) {
        super.handle(req, res)
    }

    protected static override getExpectedContentType() {
        return "application/json"
    }

    protected static override getAcceptableMethods() {
        return [
            { method: "POST", handler: this.defaultHandlePost.bind(GameApiHandler) },
            { method: "PUT", handler: this.defaultHandlePut.bind(GameApiHandler) },
            { method: "DELETE", handler: this.defaultHandleDelete.bind(GameApiHandler) },
        ]
    }

    protected static override getModelledObject() {
        return Game
    }
}

export default GameApiHandler.handle.bind(GameApiHandler)
