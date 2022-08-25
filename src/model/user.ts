import mongoose, { Schema } from "mongoose"

const UserSchema = new Schema({
    first_name: String,
    last_name: String,
    handle: {
        type: String,
        required: true,
    },
})

export default mongoose.models.User || mongoose.model("User", UserSchema, "user")
