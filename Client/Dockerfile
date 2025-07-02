# Stage 1: Build the React application
# This stage installs dependencies and builds your static files.
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your app's source code into the container
COPY . .

# Run the build script defined in your package.json
RUN npm run build

# Stage 2: Serve the application with Nginx
# This stage takes the built files and serves them with a lightweight Nginx server.
FROM nginx:stable-alpine

# Copy the built static files from the 'builder' stage to the Nginx html directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy your custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the outside world
EXPOSE 80

# Command to start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]