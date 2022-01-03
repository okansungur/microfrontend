FROM node:alpine
WORKDIR /mf_cart
COPY package.json ./
RUN npm install
COPY ./ ./
ENV  NODE_ENV development
EXPOSE 8084
CMD ["npm", "start"]









