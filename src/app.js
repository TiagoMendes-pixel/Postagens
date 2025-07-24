import express from "express";
import conexao from './config/dbConnect.js';  // Importa só a conexão
import routes from "./routes/index.js";

//Criando o evento de conexão
conexao.on("error", (error) => {
    console.error("Erro de conexão", error);
});

conexao.once("open", () => {
    console.log("Conectado ao banco com sucesso :)");
});

//Criando uma instancia do express com todas as suas funções dentro da variável app
const app = express();
routes(app);

export default app;
