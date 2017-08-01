FROM node:8.1.4

WORKDIR ./application

RUN npm install nodemon -g

EXPOSE 3000
