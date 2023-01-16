FROM node:slim

WORKDIR /frontend

COPY ./package.json .

RUN npm install --production

COPY ./.next ./.next

COPY ./public ./public

ENV BACKEND_URL ""

ENV GITHUB_CLIENTID ""

EXPOSE 3000

CMD ["npm", "start"]