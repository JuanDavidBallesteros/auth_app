FROM node:16-alpine3.16

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

# If you are building your code for production
RUN npm ci 

# Bundle app source
COPY . .

# Non root user
# RUN chown -R node:node /app
# USER node

CMD ["npm", "start"]