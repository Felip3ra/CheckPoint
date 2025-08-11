const express = require("express");
const app = express();
const user = require('./routes/users');
const port = 3000;

// Middleware para permitir JSON no corpo das requisições
app.use(express.json());

// Rota de teste
app.use("/api", user);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
