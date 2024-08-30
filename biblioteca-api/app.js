const express = require("express");
const bodyParser = require("body-parser");
const livroRoutes = require("./routes/livroRoutes");
const cors = require('cors')
require("dotenv").config();
require("./config/database"); // Conectando ao banco de dados

const corsOptions = {origin:"http://localhost:3000"};

const app = express();

app.use(cors(corsOptions), bodyParser.json());

// Middlewares
app.use(bodyParser.json());

// Rotas
app.use("/livros", livroRoutes);

// Exportando a aplicação configurada
module.exports = app;
