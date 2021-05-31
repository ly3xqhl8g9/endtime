FROM node:14.15.3-alpine AS builder

ARG NPM_TOKEN
ARG NPM_REGISTRY=npm.plurid.cloud

ENV PORT 8080
ENV HOST 0.0.0.0
ENV NODE_ENV development
ENV ENV_MODE development

ENV NPM_TOKEN $NPM_TOKEN
ENV NPM_REGISTRY $NPM_REGISTRY

WORKDIR /app

COPY . .

RUN ( echo "cat <<EOF" ; cat ./configurations/.npmrcx ; echo EOF ) | sh > ./.npmrc

RUN yarn install --production false --network-timeout 1000000
RUN yarn run build.development verbose



FROM node:14.15.3-alpine

ENV PORT 8080
ENV HOST 0.0.0.0
ENV NODE_ENV development
ENV ENV_MODE development

WORKDIR /app

COPY --from=builder /app/.npmrc ./
COPY --from=builder /app/package.json ./
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public
COPY --from=builder /app/scripts ./scripts

RUN yarn install --production --network-timeout 1000000

CMD [ "yarn", "start" ]
