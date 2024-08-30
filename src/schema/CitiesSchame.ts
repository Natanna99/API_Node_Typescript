//npm add yup
import * as yup from "yup";
import {
  CitiesCreateInterface,
  CitiesFilterInterface,
} from "../interface/Cities";

//Esquema de validação da rota de criação de cidade
export const schemaCreateCity: yup.Schema<CitiesCreateInterface> = yup
  .object()
  .shape({
    nameCity: yup.string().required().min(3),
  });

//Esquema de validação da rota de filtro de cidade
export const schemaFilterCity: yup.Schema<CitiesFilterInterface> = yup
  .object()
  .shape({
    filter: yup.string().required().min(3),
  });
