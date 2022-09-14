import mongoose, { ConnectOptions } from "mongoose"
import process from "process"

const DB_URI = process.env.DB_URI || ""

if (!DB_URI) throw new Error("DB_URI is undefined")

let cached = global.mongoose

if (!cached) {
	cached = global.mongoose = { conn: null, promise: null }
}

export default async function connect() {
	if (cached.conn) return cached.conn

	if (!cached.promise) {
		const opts: ConnectOptions = {
			bufferCommands: false
		}

		cached.promise = mongoose.connect(DB_URI, opts).then((mongoose) => {
			return mongoose
		})
	}

	cached.conn = await cached.promise
	return cached.conn
}
