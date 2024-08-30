"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
//Codigo base do servidor
const express_1 = __importDefault(require("express"));
//importando o dotenv para executar as variáveis de ambiente
require("dotenv/config");
// Importando o router
const routers_1 = require("../routers");
const app = (0, express_1.default)();
exports.app = app;
// Configuração de middleware - para exibir dados do body das requisições
app.use(express_1.default.json());
// Configuração de middleware - para realizar a chmada das rotas do routers
app.use(routers_1.router);
