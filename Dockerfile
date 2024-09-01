FROM node:18-alpine

WORKDIR /usr/node/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "sh", "-c", "npm install tail" ]