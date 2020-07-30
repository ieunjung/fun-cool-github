FROM node:12-alpine

WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 80

CMD [ "node", "server.js" ] // $ node server.js