FROM node:8
EXPOSE 8085




WORKDIR /usr/src/app

RUN npm i live-server

COPY . /usr/src/app

ENTRYPOINT ["node_modules/.bin/live-server", "--port=8085"]

