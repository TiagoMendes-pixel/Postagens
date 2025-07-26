import postagem from "../models/Postagem.js";

class PostagemController {

    static async listarPostagens(req, res) {
        try {
            const listaPostagens = await postagem.find({});
            res.status(200).json(listaPostagens);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao listar postagem` });
        }
    };

    static async listarPostagemPorId(req, res) {
        try {
            const id = req.params.id;
            const postagemEncontrada = await postagem.findById(id);
            res.status(200).json(postagemEncontrada);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao listar postagem por id` });
        }
    }

    static async cadastrarPostagem(req, res) {
        try {
            const novaPostagem = await postagem.create(req.body);
            res.status(201).json({
                message: "Criado com sucesso", postagem: novaPostagem
            });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar postagem` });
        }
    }

    static async atualizarPostagem(req, res) {
        try {
            const id = req.params.id;

            if (!id) {
                return res.status(400).json({ mensagem: "ID inválido." });
            }

            const atualizacoes = {};
            if (req.body.titulo !== undefined) atualizacoes.titulo = req.body.titulo;
            if (req.body.descricao !== undefined) atualizacoes.descricao = req.body.descricao;

            if (Object.keys(atualizacoes).length === 0) {
                return res.status(400).json({ mensagem: "Nenhum campo para atualizar foi fornecido." });
            }

            const postagemAtualizada = await postagem.findByIdAndUpdate(id, atualizacoes, { new: true });

            if (!postagemAtualizada) {
                return res.status(404).json({ mensagem: "Postagem não encontrada." });
            }

            res.status(200).json(postagemAtualizada);

        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao atualizar a postagem` });
        }
    }

    static async removerPostagem(req, res) {
        try {
            const id = req.params.id;
            const postagemRemovida = await postagem.findByIdAndDelete(id);
            if(!postagemRemovida) {
              return res.status(404).json({ message: "Postagem não encontrada para remoção." });
            }
            res.status(200).send("Postagem removida com sucesso!!!");
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao remover postagem` });
        }
    }

    static async buscarPostagens(req, res) {
        try {
            const termo = req.query.q;
            const resultados = await postagem.find({
                $or: [
                    { titulo: { $regex: termo, $options: "i" } },
                    { descricao: { $regex: termo, $options: "i" } }
                ]
            });
            res.status(200).json(resultados);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - erro na busca` });
        }
    }
}

export default PostagemController;
