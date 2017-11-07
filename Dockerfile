FROM node

EXPOSE 1337

RUN mkdir /myapp
WORKDIR /myapp

RUN rm -rf node_modules/
RUN npm install

CMD gulp
