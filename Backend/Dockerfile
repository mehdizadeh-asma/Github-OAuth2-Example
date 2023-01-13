FROM node:slim

WORKDIR /backend

COPY package.json ./package.json

RUN npm install --production

COPY ./dist ./dist

ENV GITHUB_OAUTH_CLIENTID ""

ENV GITHUB_OAUTH_CLIENTSECRET ""

EXPOSE 80

CMD ["npm", "start"]