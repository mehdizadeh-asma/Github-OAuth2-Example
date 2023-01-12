FROM node:alpine

WORKDIR /backend

EXPOSE 8080

COPY package.prod.json ./package.json

RUN npm install

COPY .env .

COPY ./dist ./dist

CMD ["npm", "start"]