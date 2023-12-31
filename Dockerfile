FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN ls -l
CMD ["npm", "run", "prod"]