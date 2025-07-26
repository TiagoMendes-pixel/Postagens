// middlewares/authMiddleware.js
import jwt from "jsonwebtoken";
const SECRET = "chaveSecretaSuperSegura";

export function autenticarToken(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token não fornecido" });

  jwt.verify(token, SECRET, (err, usuario) => {
    if (err) return res.status(403).json({ message: "Token inválido" });
    req.usuario = usuario; // adiciona info do usuário ao req
    next();
  });
}

export function autorizarTipo(...tiposPermitidos) {
  return (req, res, next) => {
    if (!tiposPermitidos.includes(req.usuario.tipo)) {
      return res.status(403).json({ message: "Permissão negada" });
    }
    next();
  };
}
