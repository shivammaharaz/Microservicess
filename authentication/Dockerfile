FROM node:14.17.3-alpine3.14 AS builder
# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
# USER node
RUN npm install
# COPY --chown=node:node . .
COPY . .
# Copy specific files to the shared volume
# Copy files from app1 to shared volume

# Final stage
FROM node:14.17.3-alpine3.14

WORKDIR /home/node/app

COPY --from=builder /home/node/app/ /home/node/app

COPY . .


EXPOSE 6000
CMD ["npm", "start"]
# COPY . /authData


# CMD ["npm","start"]