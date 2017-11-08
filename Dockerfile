FROM node

EXPOSE 1337

#uncomment if behind BBC proxy...
#ENV http_proxy=http://www-cache.reith.bbc.co.uk:80

RUN mkdir /myapp
WORKDIR /myapp

COPY package.json /myapp

RUN rm -rf node_modules/
RUN npm install
RUN npm install --global gulp-cli

#CMD gulp
