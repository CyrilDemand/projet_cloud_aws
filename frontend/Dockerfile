# Utilise une image Node.js officielle
FROM node:18-alpine

# Expose le port 3000 pour l'application
EXPOSE 3000

# Dossier de travail dans le conteneur
WORKDIR /app

# Copie des fichiers package.json et package-lock.json
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie des fichiers du projet dans le conteneur
COPY . .

# Lancement de l'application en mode développement
CMD ["npm", "run", "dev"]
