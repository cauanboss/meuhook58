FROM node:16-alpine
RUN apk add bash
COPY . /usr/local/udemy
WORKDIR /usr/local/udemy
RUN npm update -g
RUN npm install
#RUN npm run build
EXPOSE 3000
