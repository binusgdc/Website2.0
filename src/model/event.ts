import mongoose, { Schema } from "mongoose"

const rawSchema = {
    _id: {
        type: String,
        required: true,
        validate: {
            validator: function (input: string) {
                return /^E\d+$/g.test(input)
            },

            message: "Event IDs must have the format /^E\\d+$/g",
        },
    },

    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    startDate: {
        type: Date,
        required: true,
    },

    endDate: {
        type: Date,
        required: true,
    },

    picId: {
        type: String,
        required: true,
        validate: {
            validator: function (input: string) {
                return /^U\d+$/g.test(input)
            },

            message: "PIC IDs are User IDs, which must have the format /^U\\d+$/g",
        },
    },
}

const eventSchema = new Schema(rawSchema)
const eventSchemaKeys = Object.keys(rawSchema)

export default mongoose.models.Event || mongoose.model("Event", eventSchema, "Events")
export { eventSchemaKeys }
