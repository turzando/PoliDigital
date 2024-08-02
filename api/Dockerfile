FROM node:18.20.3-alpine

WORKDIR /usr/src/api

COPY package*.json ./

RUN npm install

COPY . .

RUN npx tsc

EXPOSE 8080

CMD ["npm", "run", "dev"]