FROM node:15

WORKDIR /usr/src/app

COPY index.js .
COPY package.json .

RUN npm i

EXPOSE 3000

CMD ["node","index.js"]