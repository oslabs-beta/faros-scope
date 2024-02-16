# Stage 1: Build the client and server
FROM node:alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code of the application
COPY . .

# Run the TypeScript compiler and the build process for client and server
RUN npm run build

# Stage 2: Setup the serve environment
FROM node:alpine

# Set the working directory
WORKDIR /app

# Copy the built client and server directories from the builder stage
COPY --from=builder /app/build/client ./client
COPY --from=builder /app/build/server ./server

# If your server requires any runtime dependencies, install them here
COPY package*.json ./
RUN npm install 

# Expose the port the server is running on
EXPOSE 3000

# Run the server.js from the build folder
CMD ["node", "server/index.js"]