import express from "express";
import PostagemController from "../controllers/postagemController.js";

const routes = express.Router();

routes.get("postagens", PostagemController.listarPostagens);