# Stage 1 - Build
FROM node:16 AS build
WORKDIR /usr/app
RUN npm cache clean --force
COPY . .
RUN npm install
RUN npm run build --prod

# Stage 2 - Run
FROM nginx:alpine AS run
COPY --from=build /usr/app/dist/bible-app/ /usr/share/nginx/html
EXPOSE 80
