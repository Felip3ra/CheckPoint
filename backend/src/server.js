import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import funcionarioRoutes from "./routes/funcionario.routes.js";
import pontoRoutes from "./routes/ponto.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/funcionarios", funcionarioRoutes);
app.use("/pontos", pontoRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
