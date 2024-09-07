# Use the official Node.js 18 Alpine image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

RUN npm install --save-dev ts-node ts-node-dev

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Run the development command with ts-node-dev
CMD ["npm", "run", "dev:server"]
