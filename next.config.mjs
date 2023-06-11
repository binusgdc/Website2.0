/** @type {import('next').NextConfig} */

await import("./src/env.mjs")

import * as fs from "fs"
const redirectFile = "./_redirects"

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: "standalone",
    // builtin redirects
    redirects: async () => {
        const redirects = await fs.promises.readFile(redirectFile, "utf-8")
        const lines = redirects.split("\n")
        return lines
            .map((line) => {
                if (!line.startsWith("/")) return

                const data = line.trim().split(/\s+/) // handle unknown length of whitespace
                if (data.length !== 2) {
                    console.log("Failed to parse redirect: " + line)
                    console.log(`Received: [${data.join(", ")}]`)
                    console.log("Expected: [/source, destination]")
                    return
                }

                return { source: data[0], destination: data[1], permanent: false }
            })
            .filter((e) => e !== undefined)
    },
}

export default nextConfig
