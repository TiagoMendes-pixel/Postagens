// routes/index.js
import express from "express";
import postagens from "./postagemRoutes.js";
import authRoutes from "./authRoutes.js";

const routes = (app) => {
  app.use(express.json());

  // Rota inicial
  app.route("/").get((req, res) => res.status(200).send("API de postagens"));

  // Rotas públicas
  app.use("/auth", authRoutes);  // login e registro

  // Rotas protegidas
  app.use("/postagens", postagens);
};

export default routes;
