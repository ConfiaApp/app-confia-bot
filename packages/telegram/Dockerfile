FROM node:12-alpine as builder
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
COPY package.json ./
RUN yarn

FROM node:12-alpine
WORKDIR /usr/app
COPY --from=builder node_modules node_modules
COPY . .
RUN ["rm", "-rf", "dist"]
RUN ["yarn", "build"]
CMD [ "yarn", "start:prod" ]