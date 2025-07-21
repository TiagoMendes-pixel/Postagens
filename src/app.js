import express from "express";


//Criando uma instancia do express com todas as suas funçoes dentro da variável app
const app = express();

//Criação do middleware com o express
app.use(express.json());

//Criando um array de posts patra simular um bd de posts

const postagens = [

    {
        id: 1,
        titulo: "o Surgimento da bomba nuclear",
        descricao: "A bomba atômica surgiu durante a Segunda Guerra Mundial, no âmbito do Projeto Manhattan, um esforço secreto dos Estados Unidos para desenvolver armas nucleares antes da Alemanha nazista.",
    },
    {
        id: 2,
        titulo: " O que é uma inteligência artificial?",
        descricao: "A inteligência artificial (IA) é um conjunto de tecnologias que permitem aos computadores executar uma variedade de funções avançadas, incluindo a capacidade de ver, entender e traduzir idiomas falados e escritos, analisar dados, fazer recomendações e muito mais."
    }

]

//funcao que busca a postagem por id e traz postagem já convertida pra number
function buscaPostagem(id) {
    return postagens.findIndex(postagem => {
        return postagem.id === Number(id);
    });
}

app.get("/", (req, res) => {
    res.status(200).send("Blog de postagens!!!")
})

app.get("/postagens", (req, res) => {
    res.status(200).json(postagens);
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
})

export default app;