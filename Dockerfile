FROM node:16

USER overmind

RUN sudo chown -R 777 overmind:overmind /app

WORKDIR /app

COPY package.json .
RUN npm install --production

COPY dist/release .

EXPOSE 3000

CMD ["npm", "run", "prod"]
