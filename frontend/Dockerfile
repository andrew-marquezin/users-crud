FROM node:22-alpine

RUN corepack enable && corepack prepare pnpm@11 --activate

WORKDIR /app

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./

ENV CI=true
RUN pnpm install --no-frozen-lockfile

COPY . .

EXPOSE 5173

CMD ["pnpm", "run", "dev"]