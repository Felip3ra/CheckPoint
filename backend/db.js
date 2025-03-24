
require("dotenv").config({path: __dirname + "/.env"});
console.log("DB_SERVER:", process.env.DB_SERVER);

const sql = require("mssql");

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT, 10),
  options: {
    encrypt: process.env.DB_ENCRYPT === "true",
    trustServerCertificate: true, // Para conexões locais
  },
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("Conectado ao SQL Server");
    return pool;
  })
  .catch((err) => {
    console.error("Erro ao conectar ao SQL Server", err);
  });

module.exports = {
  sql,
  poolPromise,
};
