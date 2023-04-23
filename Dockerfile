ARG PORT=3000

FROM node:18-alpine3.16 AS base

FROM base AS dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED 1
COPY --from=dependencies /app/node_modules ./node_modules
COPY public ./public
COPY src ./src
COPY package.json package-lock.json ./
COPY next.config.js postcss.config.js tailwind.config.js tsconfig.json _redirects ./
RUN npm run build

FROM base AS run
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static

EXPOSE $PORT
ENV PORT $PORT
ENTRYPOINT [ "node", "server.js" ]