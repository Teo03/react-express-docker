FROM node:9

# add directory
RUN mkdir -p /src/app
WORKDIR /src/app

COPY package.json /src/app/
RUN yarn install

COPY . /src/app

# build
RUN yarn build

EXPOSE 9000
CMD [ "yarn", "start:server" ]
