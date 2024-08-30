import { Router } from "express";
import { CitiesRouter } from "./CitiesRoutes";

const routers = Router();

//definindo o caminho inicial das rotas
routers.use("/city", CitiesRouter);

export { routers };
