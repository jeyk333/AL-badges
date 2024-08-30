# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3001 to the outside world
EXPOSE 3001

# Command to run the Next.js app in development mode on port 3001
CMD ["npm", "run", "dev", "--", "-p", "3001"]