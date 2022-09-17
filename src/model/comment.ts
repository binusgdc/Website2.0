import mongoose, { Schema } from "mongoose"

const rawSchema = {
    _id: {
        type: String,
        required: true,
        validate: {
            validator: function (input: string) {
                return /^E\d+$/g.test(input)
            },

            message: "Comment IDs must have the format /^E\\d+$/g",
        },
    },

    userId: {
        type: String,
        required: true,
        validate: {
            validator: function (input: string) {
                return /^U\d+$/g.test(input)
            },

            message: "User ID must have the format /^U\\d+$/g",
        },
    },

    content: {
        type: String,
        required: true,
    },

    createdDate: {
        type: Date,
        required: true,
    },

    updateDate: {
        type: Date,
        required: false,
    }
}

const commentSchema = new Schema(rawSchema)
const commentSchemaKeys = Object.keys(rawSchema)

export default mongoose.models.Comment || mongoose.model("Comment", commentSchema, "Comments")
export { commentSchemaKeys }
