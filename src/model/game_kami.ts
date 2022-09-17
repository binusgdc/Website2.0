import mongoose, { Schema } from "mongoose"

const rawSchema = {
    _id: {
        type: String,
        required: true,
        validate: {
            validator: function (input: string) {
                return /^E\d+$/g.test(input)
            },

            message: "Game Kami IDs must have the format /^E\\d+$/g",
        },
    },

    gameTitle: {
        type: String,
        required: true,
    },

    publishDate: {
        type: Date,
        required: true,
    },

    gameDescription: {
        type: String,
        required: true,
    },

    itchLink: {
        type: String,
        required: true,
    }
}

const gameKamiSchema = new Schema(rawSchema)
const gameKamiSchemaKeys = Object.keys(rawSchema)

export default mongoose.models.Game_kami || mongoose.model("Game_kami", gameKamiSchema, "Game_kami")
export { gameKamiSchemaKeys }

// pls fix my naming convention if it's doo doo
