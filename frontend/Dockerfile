FROM node:10-alpine as builder

WORKDIR /app

COPY . .

RUN npm i

RUN npm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
                               
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]