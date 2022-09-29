import { NextApiRequest, NextApiResponse } from "next"

import { TemplateApiHandler } from "../../templates/template-api-path"

import BlogPost from "../../model/blogPost"

class BlogPostApiHandler extends TemplateApiHandler {
    public static override handle(req: NextApiRequest, res: NextApiResponse) {
        super.handle(req, res)
    }

    protected static override getExpectedContentType() {
        return "application/json"
    }

    protected static override getAcceptableMethods() {
        return [
            { method: "POST", handler: this.defaultHandlePost.bind(BlogPostApiHandler) },
            { method: "PUT", handler: this.defaultHandlePut.bind(BlogPostApiHandler) },
            { method: "DELETE", handler: this.defaultHandleDelete.bind(BlogPostApiHandler) },
        ]
    }

    protected static override getModelledObject() {
        return BlogPost
    }
}

export default BlogPostApiHandler.handle.bind(BlogPostApiHandler)
