// import http from "http";
import "dotenv/config";
import app from "./src/app.js"



const PORT = 3000;

const rotas = {
    "/": "Blog de Postagens",
    "/Postagens": "Entrei na rota de postagens",
    "/Usuarios": "Entrei na rota de usuarios"
};

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-type": "text/plain" });
//     res.end(rotas[req.url]);
// });

// server.listen(PORT, () => {
//     console.log("Servidor Escutando");
// });

app.listen(PORT, () => {
    console.log("Servidor Escutando");
});