FROM node:14-alpine AS builder

WORKDIR /app

COPY . .

ARG NPM_TOKEN
ARG NPM_REGISTRY=registry.npmjs.org

ENV NPM_TOKEN $NPM_TOKEN
ENV NPM_REGISTRY $NPM_REGISTRY

ENV ENV_MODE production
ENV NODE_ENV production

# Write environment variables into .npmrc
RUN ( echo "cat <<EOF" ; cat ./configurations/.npmrcx ; echo EOF ) | sh > ./.npmrc

RUN yarn install --production false

RUN yarn build.production



FROM node:14-alpine

WORKDIR /app

ENV ENV_MODE production
ENV NODE_ENV production

ENV PORT=8080

COPY --from=builder /app/.npmrc ./
COPY --from=builder /app/package.json ./
COPY --from=builder /app/build ./build
COPY --from=builder /app/scripts ./scripts

RUN yarn install --production

RUN rm -f .npmrc

CMD ["yarn", "start"]
