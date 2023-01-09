import mongoose, { Schema } from "mongoose"

const userSchema = new Schema({
    _id: {
        type: String,
        required: true,
        validate: {
            validator: function (input: string) {
                return /^U\d+$/g.test(input)
            },

            message: "User IDs must have the format /^U\\d+$/g",
        },
    },

    name: {
        type: String,
        required: true,
    },

    profileImage: {
        type: String,
        default: "",
    },

    dob: {
        type: Date,
        required: true,
    },

    studentId: {
        type: String,
        required: true,
        validate: {
            validator: function (input: string) {
                return /\d{10}/g.test(input)
            },

            message: "Student IDs must have the format /^\\d{10}$/g",
        },
    },

    campusRegion: {
        type: String,
        required: true,
        enum: ["KMG", "ALS", "BKS", "OL", "BDG", "MLG", "SNY"],
    },

    major: {
        type: String,
        required: true,
        enum: ["GAT", "CS", "DKV"],
    },

    rank: {
        type: String,
        required: true,
        enum: ["STAFF", "ACTIVIST", "MEMBER", "EXTERNAL_PARTNER"],
    },
})

export default mongoose.models.User || mongoose.model("User", userSchema, "Users")
