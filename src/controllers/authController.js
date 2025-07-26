// controllers/authController.js
import usuario from "../models/Usuario.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET = "chaveSecretaSuperSegura"; // ideal usar env

class AuthController {
  static async registrar(req, res) {
    try {
      const { nome, email, senha, tipo } = req.body;
      const senhaHash = await bcrypt.hash(senha, 10);
      const novoUsuario = await usuario.create({ nome, email, senha: senhaHash, tipo });
      res.status(201).json({ message: "Usuário registrado com sucesso", usuario: novoUsuario });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async login(req, res) {
    try {
      const { email, senha } = req.body;
      const user = await usuario.findOne({ email });
      if (!user) return res.status(404).json({ message: "Usuário não encontrado" });

      const senhaValida = await bcrypt.compare(senha, user.senha);
      if (!senhaValida) return res.status(401).json({ message: "Senha inválida" });

      const token = jwt.sign({ id: user._id, tipo: user.tipo }, SECRET, { expiresIn: "1h" });
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default AuthController;
