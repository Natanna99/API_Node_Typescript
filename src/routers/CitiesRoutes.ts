import { Router } from "express";
import { validator } from "../shared/middlewares/Validator";
import {
  schemaCity,
  schemaGetAllCities,
  schemaIdCity,
} from "../schema/CitiesSchame";

import { create } from "../controllers/Cities/CreateCityController";
import { getAllCities } from "../controllers/Cities/GetAllCitiesController";
import { getByIdCities } from "../controllers/Cities/GetByIdCitiesController";
import { updateByIdCity } from "../controllers/Cities/UpdateByIdController";
import { deleteById } from "../controllers/Cities/DeleteByIdController";

const CitiesRouter = Router();

//Constantes para validação de corpo de requisição com o tipo de validação (body) recebendo o esquema de validação para criação de cidade
const createValidator = validator({ body: schemaCity });

//Rota de criação de cidade (validar o corpo da chamada com o middleware createBodyValidator, depois chamar o método create)
CitiesRouter.post("/create", createValidator, create);

const getListCities = validator({ query: schemaGetAllCities });
CitiesRouter.get("/list", getListCities, getAllCities);

const validationId = validator({ params: schemaIdCity });
CitiesRouter.get("/list/:id", validationId, getByIdCities);
CitiesRouter.delete("/delete/:id", validationId, deleteById);

const updateByIdValidation = validator({
  params: schemaIdCity,
  body: schemaCity,
});
CitiesRouter.put("/update/:id", updateByIdValidation, updateByIdCity);

export { CitiesRouter };
