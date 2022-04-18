FROM node:16.3.0-buster

ENV TZ 'Asia/Tokyo'

WORKDIR /api
RUN npm install -g @nestjs/cli

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 8080
