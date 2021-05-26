FROM node:latest as node

ARG APP=angular-game-of-life
ENV APP ${APP}

WORKDIR /app
COPY ./ /app/

#Install and build angular
RUN npm ci
RUN npm run build --prod
RUN mv /app/dist/${APP}/* /app/dist/

FROM nginx:latest

COPY --from=node /app/dist/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
