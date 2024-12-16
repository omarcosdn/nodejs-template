FROM node:20-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

COPY .env .env

COPY . .

RUN npm install && npm run build

EXPOSE 3000

CMD ["npm", "start"]