FROM node:13

ENV HOST 0.0.0.0

RUN mkdir -p /app
COPY . /app
WORKDIR /app

ARG ENV
ENV ENV $ENV

RUN npm install && npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
