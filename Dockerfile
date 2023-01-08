FROM node
WORKDIR /user/src/app
COPY package.json .
RUN npm install
COPY index.js .
CMD ["node", "index"]
