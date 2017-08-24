FROM node

EXPOSE 1337

RUN npm rm --global gulp
RUN npm install --global gulp-cli
RUN npm install --save-dev gulp
