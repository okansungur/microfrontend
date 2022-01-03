FROM node:10-alpine
ENV NODE_ENV development
WORKDIR /container
COPY package.json ./
RUN npm install
COPY ./ ./
EXPOSE 8181
CMD ["npm", "start"]








