FROM node:16.3.0-buster
ENV LANG C.UTF-8
ENV TZ 'Asia/Tokyo'

WORKDIR /app

RUN npm install -g @nestjs/cli

COPY ./ ./
RUN npm install

ENV JWT_SECRET_KEY=bfjebjeabjbdnkjankjaenjkgbaejrbfjk3qjwhrioh3qwabfjckabknawkdnak
ENV PORT=5432
ENV HOST=pt-pricing-db.c50hlo4hzhce.ap-northeast-1.rds.amazonaws.com
ENV USERNAME=postgres
ENV PASSWORD=postgres
ENV SCHEMA=atai
ENV DATABASE=atai

EXPOSE 8000
