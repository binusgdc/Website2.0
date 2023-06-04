/** @type {import('next').NextConfig} */

await import("./src/env.mjs")

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: "standalone",
}

export default nextConfig
