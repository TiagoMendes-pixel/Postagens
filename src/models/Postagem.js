import mongoose from "mongoose";

//Criando o schema para interpretaçã do banco
const PostagemSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, requered: true },
    descricao: { type: String },
}, { versionKey: false });


const postagem = mongoose.model("postagens", PostagemSchema);

export default postagem;