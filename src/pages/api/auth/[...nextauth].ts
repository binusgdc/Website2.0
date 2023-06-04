import NextAuth from "next-auth"
import authOptions from "../../../server/auth"

// import GoogleProvider from "next-auth/providers/google"
// import DiscordProvider from "next-auth/providers/discord"
// import { env } from "../../../env.mjs"
// import { AuthOptions } from "next-auth"
// import { redirectsService } from "../lib/redirect.js"

// const google =
//     env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET
//         ? GoogleProvider({
//               clientId: env.GOOGLE_CLIENT_ID,
//               clientSecret: env.GOOGLE_CLIENT_SECRET,
//           })
//         : undefined

// const discord =
//     env.DISCORD_CLIENT_ID && env.DISCORD_CLIENT_SECRET
//         ? DiscordProvider({
//               clientId: env.DISCORD_CLIENT_ID,
//               clientSecret: env.DISCORD_CLIENT_SECRET,
//           })
//         : undefined

// const authOptions: AuthOptions = {
//     providers: filterNotUndefined([google, discord]),
//     callbacks: {
//         async signIn({ user }) {
//             return user.email ? await redirectsService.emailIsAuthorized(user.email) : false
//         },
//     },
// }

// function filterNotUndefined<T>(array: (T | undefined)[]): T[] {
//     const result = []
//     for (const possiblyUndefined of array) {
//         if (possiblyUndefined !== undefined) {
//             result.push(possiblyUndefined)
//         }
//     }
//     return result
// }

export default NextAuth(authOptions)
