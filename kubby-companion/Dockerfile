# Use an official Node runtime as a base image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available) into the container
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the rest of the application's source code
COPY . .

# Make port 3000 available outside this container
EXPOSE 8000

# Define the command to run your app
CMD ["node", "server.js"]
