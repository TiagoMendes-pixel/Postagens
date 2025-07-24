import express from "express";
import PostagemController from "../controllers/postagemController.js";

const routes = express.Router();

routes.get("/postagens", PostagemController.listarPostagens);
routes.post("/postagens", PostagemController.cadastrarPostagem);
routes.put("/postagens/:id", PostagemController.AtualizarLivro);
routes.delete("/postagens/:id", PostagemController.removePostagem);

export default routes;