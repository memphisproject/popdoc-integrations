FROM node:12

# create root application folder
WORKDIR /app

# copy configs to /app folder
COPY package*.json ./
COPY tsconfig.json ./
COPY babel.config.js ./
COPY ormconfig.json ./

# copy source code to /app/src folder
COPY src /app/src

# check files list
RUN ls -a

RUN npm install
RUN npm run build

EXPOSE 3001

CMD [ "node", "./dist/shared/infra/http/server.js" ]