import process from "process"

export function log(msg: string) {
    if (!process.env.DEBUG) return
    console.log(msg)
}
