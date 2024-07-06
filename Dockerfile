# Use the official Node.js image as a base image
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose port
EXPOSE 8080

# Run the migrations, seed data, and then start the application
CMD ["sh", "-c", "npm run migrate-and-seed && npm start"]
