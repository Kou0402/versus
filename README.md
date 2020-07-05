# versus

> My fantabulous Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## deploy
$ docker build -t nuxt-ssr:latest .
$ docker tag nuxt-ssr:latest 477233028522.dkr.ecr.ap-northeast-1.amazonaws.com/nuxt-ssr:latest
$ aws ecr get-login-password | docker login --username AWS --password-stdin https://477233028522.dkr.ecr.ap-northeast-1.amazonaws.com
$ docker push 477233028522.dkr.ecr.ap-northeast-1.amazonaws.com/nuxt-ssr:latest

$ タスク定義の更新
$ サービスの更新