import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import postagem from "./models/Postagem.js";

//Conectando na base de dados
const conexao = await conectaNaDatabase();

//Criando o evendo de conexão
conexao.on("error", (error) => {
    console.error("erro de conexão", error);
});

conexao.once("open", () => {
    console.log("Connected successfully :)")
})

//Criando uma instancia do express com todas as suas funçoes dentro da variável app
const app = express();

//Criação do middleware com o express
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Blog de postagens!!!")
})

app.get("/postagens", async (req, res) => {
    const listaPostagens = await postagem.find({})
    res.status(200).json(listaPostagens);
});

app.get("/postagens/:id", (req, res) => {
    const index = buscaPostagem(req.params.id);
    res.status(200).json(postagens[index]);

});


app.post("/postagens", (req, res) => {
    postagens.push(req.body);
    res.status(201).send("Postagem cadastrada com sucesso.")
});

app.put("/postagens/:id", (req, res) => {
    const index = buscaPostagem(req.params.id);

    if(index === -1){
        return res.status(404).json({ mensagem: "Postagem não encontrada."});
    }

    //Só atualiza se os campos existirem no body
    if(req.body.titulo !== undefined){
        postagens[index].titulo = req.body.titulo;
    }

    if(req.body.descricao !== undefined){
        postagens[index].descricao = req.body.descricao;
    }

    res.status(200).json(postagens[index]);
});

app.delete("/postagens/:id", (req, res) => {
    const index = buscaPostagem(req.params.id);
    postagens.splice(index, 1);
    res.status(200).send("Postagem removida com sucesso!!!")

});

export default app;