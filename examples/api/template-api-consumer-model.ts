import mongoose, { Schema } from "mongoose"

const templateSchema = new Schema({
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
})

export default mongoose.models.Template || mongoose.model("Template", templateSchema, "Templates")
