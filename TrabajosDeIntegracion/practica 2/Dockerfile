# Utiliza la imagen oficial de Node.js 
FROM node:14-alpine

# Establece el directorio 
WORKDIR /app

#package-lock.json al contenedor
COPY . .

# dependencias de la aplicación
RUN npm install --prod

# Copia el resto de los archivos de la aplicación al contenedor

# Instala el CLI de Angular
RUN npm install -g @angular/cli --prod
ENTRYPOINT [ "ng" ]

#  ejecutar el contenedor
CMD ["ng", "serve", "--host", "0.0.0.0"]
