import express from "express";
import postagens from "./postagemRoutes.js";

const routes = (app) => {
app.route("/").get((req, res) => res.status(200).send("Api de postagens"));

app.use(express.json(), postagens);

};

export default routes;
