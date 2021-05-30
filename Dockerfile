FROM node:14-alpine

WORKDIR /app
# copy configs to /app folder
COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json ./
COPY babel.config.js ./
COPY ormconfig.json ./

RUN yarn
COPY ./ ./

EXPOSE 3001

CMD ["yarn", "dev"]
