FROM "node"
COPY package*.json .
RUN npm i
WORKDIR /opt/progress
EXPOSE "3000"
CMD ["sleep", "infinity"]