# Use the latest Node.js version
FROM node:21

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port
EXPOSE 8080

# Command to run the application
CMD ["npm", "start"]
