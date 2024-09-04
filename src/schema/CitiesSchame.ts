//npm add yup
import * as yup from "yup";
import {
  CitiesCreateInterface,
  ParamsCitiesInterface,
  QueryCitiesInterface,
} from "../interface/Cities";

//Esquema de validação da rota de criação de cidade
export const schemaCity: yup.Schema<CitiesCreateInterface> = yup
  .object()
  .shape({
    nameCity: yup.string().required().min(3),
  });

//Esquema de validação da rota de listagem de cidades
export const schemaGetAllCities: yup.Schema<QueryCitiesInterface> = yup
  .object()
  .shape({
    page: yup.number().positive().integer().moreThan(0),
    limit: yup.number().positive().integer().moreThan(0),
    filter: yup.string().min(3),
  });

//Esquema de validação da rota de busca de cidade por id
export const schemaIdCity: yup.Schema<ParamsCitiesInterface> = yup
  .object()
  .shape({
    id: yup.number().positive().integer().moreThan(0),
  });
