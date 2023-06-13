FROM "node"
COPY package*.json .
RUN npm i
WORKDIR /opt/progress
ENV PORT=3001
EXPOSE "3001"
CMD ["sleep", "infinity"]