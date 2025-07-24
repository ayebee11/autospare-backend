# Stage 1: Build the React app
FROM node:20 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the built app using Nginx
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

# ✅ Add custom Nginx config to handle React routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
