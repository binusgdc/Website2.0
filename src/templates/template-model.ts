import mongoose, { Schema } from "mongoose"

const rawSchema = {
    _id: {
        type: String,
        required: true,
        validate: {
            validator: function (input: string) {
                return true
            },

            message: "Template IDs must have the format format",
        },
    },
}

const templateSchema = new Schema(rawSchema)
const templateSchemaKeys = Object.keys(rawSchema)

export default mongoose.models.Template || mongoose.model("Template", templateSchema, "Templates")
export { templateSchemaKeys }
