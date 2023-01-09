import mongoose, { Schema } from "mongoose"

const blogPostSchema = new Schema({
    _id: {
        type: String,
        required: true,
        validate: {
            validator: function (input: string) {
                return /^B\d+$/g.test(input)
            },

            message: "Blog Post IDs must have the format /^B\\d+$/g",
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
})

export default mongoose.models.BlogPost || mongoose.model("BlogPost", blogPostSchema, "BlogPosts")
