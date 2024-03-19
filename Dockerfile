# Use Node.js 18 Alpine image
FROM node:18-alpine as BUILD_IMAGE

# Set working directory
WORKDIR /app/filumder

# Copy package.json and install dependencies
COPY package.json .
COPY yarn.lock .

RUN npm install

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Production image
FROM nginx:alpine
COPY --from=BUILD_IMAGE /app/filumder/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



FROM busybox:1.35
RUN adduser -D static
USER static
WORKDIR /home/static
COPY --from=PRODUCTION_IMAGE /app/filumder/dist .
CMD ["busybox", "httpd", "-f", "-v", "-p", "3080"]