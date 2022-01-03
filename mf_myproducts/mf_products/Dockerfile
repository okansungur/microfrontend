FROM node:alpine
WORKDIR /mf_products
COPY package.json ./
RUN npm install
COPY ./ ./
ENV  NODE_ENV development
EXPOSE 8081
CMD ["npm", "start"]









