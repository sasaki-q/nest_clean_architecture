FROM node:16.3.0-buster
ENV LANG C.UTF-8
ENV TZ 'Asia/Tokyo'

WORKDIR /api

RUN npm install -g @nestjs/cli

COPY ./ ./
RUN npm install

EXPOSE 8000

CMD ["npm", "run", "start:dev"]
