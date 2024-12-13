# Use a lightweight Node.js base image
FROM node:16-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install production dependencies only
RUN npm install 

# Copy the rest of the application code
COPY . .

# Expose the app’s port (adjust as needed)
EXPOSE 5000

# Start the Node.js application
CMD ["node", "server.js"]  
