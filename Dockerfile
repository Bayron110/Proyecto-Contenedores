# ---------- Build Angular ----------
FROM node:20 as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npx ng build --configuration production

# ---------- Servir con Nginx ----------
FROM nginx:alpine

# Línea correcta
COPY --from=build /app/dist/proyecto-contenedores/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
