"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesRouter = void 0;
const express_1 = require("express");
const Validator_1 = require("../shared/middlewares/Validator");
const CitiesSchame_1 = require("../schema/CitiesSchame");
const CreateCityController_1 = require("../controllers/Cities/CreateCityController");
const GetAllCitiesController_1 = require("../controllers/Cities/GetAllCitiesController");
const GetByIdCitiesController_1 = require("../controllers/Cities/GetByIdCitiesController");
const UpdateByIdController_1 = require("../controllers/Cities/UpdateByIdController");
const DeleteByIdController_1 = require("../controllers/Cities/DeleteByIdController");
const CitiesRouter = (0, express_1.Router)();
exports.CitiesRouter = CitiesRouter;
//Constantes para validação de corpo de requisição com o tipo de validação (body) recebendo o esquema de validação para criação de cidade
const createValidator = (0, Validator_1.validator)({ body: CitiesSchame_1.schemaCity });
//Rota de criação de cidade (validar o corpo da chamada com o middleware createBodyValidator, depois chamar o método create)
CitiesRouter.post("/create", createValidator, CreateCityController_1.create);
const getListCities = (0, Validator_1.validator)({ query: CitiesSchame_1.schemaGetAllCities });
CitiesRouter.get("/list", getListCities, GetAllCitiesController_1.getAllCities);
const validationId = (0, Validator_1.validator)({ params: CitiesSchame_1.schemaIdCity });
CitiesRouter.get("/list/:id", validationId, GetByIdCitiesController_1.getByIdCities);
CitiesRouter.delete("/delete/:id", validationId, DeleteByIdController_1.deleteById);
const updateByIdValidation = (0, Validator_1.validator)({
    params: CitiesSchame_1.schemaIdCity,
    body: CitiesSchame_1.schemaCity,
});
CitiesRouter.put("/update/:id", updateByIdValidation, UpdateByIdController_1.updateByIdCity);
