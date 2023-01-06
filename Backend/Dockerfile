FROM node

WORKDIR /backend

EXPOSE 8080

COPY package.json .

RUN npm install

COPY .env .

COPY ./dist ./dist

CMD ["npm", "start"]