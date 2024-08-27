//Codigo base do servidor
import express from "express";

// Importando o router
import { router } from "../routers";

const app = express();

// Configuração de middleware - para exibir dados do body das requisições
app.use(express.json());

// Configuração de middleware - para realizar a chmada das rotas do routers
app.use(router);

export { app };
