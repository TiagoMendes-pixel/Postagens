import postagem from "../models/Postagem.js";


class PostagemController {

    //método para listar as postagens;
    static async listarPostagens(req, res) {
        try {
            const listaPostagens = await postagem.find({})
            res.status(200).json(listaPostagens);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao listar postagem` });
        }

    };

    //método para listar postagem por id
    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const postagemEncontrada = await postagem.findById(id);
            res.status(200).json(postagemEncontrada);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao listar postagem por id` });
        }

    }

    //método para criar as postagens 
    static async cadastrarPostagem(req, res) {
        try {
            const novaPostagem = await postagem.create(req.body);
            res.status(201).json({
                message: " Criado com sucesso ", postagem: novaPostagem
            });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar postagem` });
        }
    }



    //método para atualizar postagem 
    static async AtualizarLivro(req, res) {
        try {
            const id = req.params.id;

            // Verificação básica de ID vazio
            if (!id) {
                return res.status(400).json({ mensagem: "ID inválido." });
            }

            // Construir o objeto de atualização apenas com os campos que vierem no body
            const atualizacoes = {};
            if (req.body.titulo !== undefined) atualizacoes.titulo = req.body.titulo;
            if (req.body.descricao !== undefined) atualizacoes.descricao = req.body.descricao;

            // Verifica se ao menos um campo foi enviado
            if (Object.keys(atualizacoes).length === 0) {
                return res.status(400).json({ mensagem: "Nenhum campo para atualizar foi fornecido." });
            }

            // Atualiza e retorna a nova versão da postagem
            const postagemAtualizada = await postagem.findByIdAndUpdate(id, atualizacoes, { new: true });

            if (!postagemAtualizada) {
                return res.status(404).json({ mensagem: "Postagem não encontrada." });
            }

            res.status(200).json(postagemAtualizada);

        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao atualizar a postagem` });
        }
    }

    static async removePostagem(req, res) {
        try {
            const id = req.params.id;
            const postagemRemovida = await postagem.findByIdAndDelete(id);
            res.status(200).send("Postagem removida com sucesso!!!")
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao Remover  postagem` });
        }

    }



};

export default PostagemController;


