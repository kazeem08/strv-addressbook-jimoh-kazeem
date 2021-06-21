FROM node:alpine

WORKDIR /home/app

ADD . /home/app

COPY package.json /home/app

RUN npm install

EXPOSE 8000

CMD ["npm", "start"]