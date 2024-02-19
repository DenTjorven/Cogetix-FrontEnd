# Use the official lightweight Node.js 20 image.
# https://hub.docker.com/_/node
FROM node:20-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

ENV PORT 8080
ENV HOST 0.0.0.0

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY cogetix-frontend/package*.json ./

# Copy local code to the container image.
COPY . ./

RUN apt-get update && apt-get install -y git

# Install dependencies.
RUN npm install
RUN npm run deploy
