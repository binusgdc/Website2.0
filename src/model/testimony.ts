import mongoose, { Schema } from "mongoose"

const testimonySchema = new Schema({
    _id: {
        type: String,
        required: true,
        validate: {
            validator: function (input: string) {
                return /^T\d+$/g.test(input)
            },

            message: "Testimony IDs must have the format /^T\\d+$/g",
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

    content: {
        type: String,
        required: true,
    },

    creationDate: {
        type: Date,
        required: true,
    },

    lastUpdatedDate: {
        type: Date,
        required: false,
    },
})

export default mongoose.models.Testimony ||
    mongoose.model("Testimony", testimonySchema, "Testimonies")
