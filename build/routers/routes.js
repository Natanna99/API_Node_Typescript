"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routers = void 0;
const express_1 = require("express");
const CitiesRoutes_1 = require("./CitiesRoutes");
const routers = (0, express_1.Router)();
exports.routers = routers;
//definindo o caminho inicial das rotas
routers.use("/city", CitiesRoutes_1.CitiesRouter);
