FROM node:22-alpine

RUN corepack enable && corepack prepare pnpm@11 --activate

WORKDIR /app

COPY pnpm-lock.yaml package.json ./

ENV CI=true
RUN pnpm install --no-frozen-lockfile

COPY . .

EXPOSE 3001

CMD ["pnpm", "start"]