// models/Usuario.js
import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  tipo: { type: String, enum: ["professor", "aluno"], required: true } // controle de permissão
}, { versionKey: false });

const usuario = mongoose.model("usuarios", UsuarioSchema);
export default usuario;
