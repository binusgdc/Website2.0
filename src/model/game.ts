import mongoose, { Schema } from "mongoose"

const rawSchema = {
    _id: {
        type: String,
        required: true,
        validate: {
            validator: function (input: string) {
                return /^G\d+$/g.test(input)
            },

            message: "Game IDs must have the format /^G\\d+$/g",
        },
    },

    title: {
        type: String,
        required: true,
    },

	description: {
		type: String,
		required: true,
	},

    publishedDate: {
        type: Date,
        required: true,
    },

    itchLink: {
        type: String,
        required: true,
    },
}

const gameSchema = new Schema(rawSchema)
const gameSchemaKeys = Object.keys(rawSchema)

export default mongoose.models.Game || mongoose.model("Game", gameSchema, "Games")
export { gameSchemaKeys }
