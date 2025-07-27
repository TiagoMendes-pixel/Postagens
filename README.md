- passo a passo pra a execuçao do projeto

1- primeiramente será necessário criar o arquivo package.json por meio do comando npm init -y

2- Após o arquivo ser criado, realizar uma pequena alteração inserindo "tpe":"module", para conseguir exportar as classes.

3- Podemos então criar nosso servidor - crie um arquivo chamado server.js e import http dessa forma, ja que vamos trabalhar como uma API REST - import http from "http";

4 - Instalar a biblioteca nodemon@3.0.1 para reiniciar o projeto automaticamente, nao esquecer e adicionar o scrip no package.json

5 - Nesse projeto utilizaremos o express que é um framework de node.js pra servidores http - O comando de instalação do express é 
npm install express@4.18.1 que é versão que vamos utilizar nesse projeto


--comando pra config de email no git - teste
     git config --global user.email "t.m******3@gmail.com"
     git config --global user.name "Tiago"


     --secrets para o banco de dados mongo
     Username -  tiagoletras123
     password -  INVRN13ZYXVE7amG


     mongodb+srv://tiagoletras123:INVRN13ZYXVE7amG@fiap.vut93op.mongodb.net/?retryWrites=true&w=majority&appName=Fiap


     6- Instalação do mongoose para conexão com banco de dados mongoDB na nuvem

     7 - Criando o diretorio de controller dentro dp projeto para organização das camadas
     obs: Revisar o conceito de asyns e sync nos métodos 

     8- Criando autenticação para alunos e professores com jwt - (json web token) - 
