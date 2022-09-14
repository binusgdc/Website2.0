import type mongoose from "mongoose"

declare global {
    var mongoose: {
        conn: any | null
        promise: Promise<mongoose> | null
    }
}
