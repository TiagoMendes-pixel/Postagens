# Usa a imagem oficial do Node.js
FROM node:18

# Define diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependência e instala os pacotes
COPY package*.json ./
RUN npm install

# Copia todo o restante do projeto
COPY . .

# Expõe a porta da aplicação (Express)
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]
