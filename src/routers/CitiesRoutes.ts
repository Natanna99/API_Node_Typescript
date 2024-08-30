import { Router } from "express";
import { create } from "../controllers/Cities/CreateCityController";
import { validator } from "../shared/middlewares/Validator";
import { schemaCreateCity, schemaFilterCity } from "../schema/CitiesSchame";

const CitiesRouter = Router();

CitiesRouter.get("/", (req, res) => {
  res.send("Hello World Dev!");
});

//Contantes para validação de corpo de requisição com o tipo de validação (body) recebendo o esquema de validação para criação de cidade
const createValidator = validator({
  body: schemaCreateCity,
  query: schemaFilterCity,
});

//Rota de criação de cidade (validar o corpo da chamada com o middleware createBodyValidator, depois chamar o método create)
CitiesRouter.post("/create", createValidator, create);

export { CitiesRouter };
