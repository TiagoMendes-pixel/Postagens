import postagem from "../models/Postagem";


class PostagemController {

    static async listarPostagens(req, res) {
        const listaPostagens = await postagem.find({})
        res.status(200).json(listaPostagens);
    };


    static async cadastrarPostagem(rew, res) {
        try {
            const novaPostagem = await postagem.create(req.body);
            res.status(201).json({
                message: " Criado com sucesso ", postagem:
                    novaPostagem
            })
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar postagem` });
        }
    }

};

export default PostagemController;


