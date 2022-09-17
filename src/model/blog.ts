import mongoose, { Schema } from "mongoose"

const rawSchema = {
    _id: {
        type: String,
        required: true,
        validate: {
            validator: function (input: string) {
                return /^B\d+$/g.test(input)
            },

            message: "Blog IDs must have the format /^B\\d+$/g",
        },
    },

    authorId: {
        type: String,
        required: true,
        validate: {
            validator: function (input: string) {
                return /^U\d+$/g.test(input)
            },

            message: "Author IDs are User IDs, which must have the format /^U\\d+$/g",
        },
    },

    title: {
        type: String,
        required: true,
    },

    content: {
        type: String,
        required: true,
    },

    publishedDate: {
        type: Date,
        required: true,
    },

    lastUpdatedDate: {
        type: Date,
        required: false,
    },
}

const blogSchema = new Schema(rawSchema)
const blogSchemaKeys = Object.keys(rawSchema)

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema, "Blogs")
export { blogSchemaKeys }
