// import mongoose, { mongo } from "mongoose";

// async function conectaNaDatabase() {

//     mongoose.connect(process.env.DB_CONNECTION_STRING);

//     return mongoose.connection;

// };

// export default conectaNaDatabase;


import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoUrl = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/BlogPostagens';

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Conectado ao MongoDB"))
.catch((err) => console.error("❌ Erro ao conectar:", err));

const conexao = mongoose.connection;

export default conexao;
