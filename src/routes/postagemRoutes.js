// routes/postagensRoutes.js
import express from "express";
import PostagemController from "../controllers/postagemController.js";
import { autenticarToken, autorizarTipo } from "../middlewares/authMiddleware.js";



const routes = express.Router();

// CORRIGIDO:
routes.get("/search", autenticarToken, PostagemController.buscarPostagens);
routes.get("/", autenticarToken, PostagemController.listarPostagens);
routes.get("/:id", autenticarToken, PostagemController.listarPostagemPorId);
routes.post("/", autenticarToken, autorizarTipo("professor"), PostagemController.cadastrarPostagem);
routes.put("/:id", autenticarToken, autorizarTipo("professor"), PostagemController.atualizarPostagem);
routes.delete("/:id", autenticarToken, autorizarTipo("professor"), PostagemController.removerPostagem);



export default routes;
