# Use official Node.js image
FROM node:22

# Create working directory inside container
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy remaining files
COPY . .

# Backend runs on port 5000
EXPOSE 5000

# Start server
CMD ["npm", "start"]