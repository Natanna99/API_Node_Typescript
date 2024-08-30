//npm add yup
import * as yup from "yup";
import { CitiesCreateInterface } from "../interface/Cities";

//Esquema de validação da rota de criação de cidade
export const schemaCreateCity: yup.Schema<CitiesCreateInterface> = yup
  .object()
  .shape({
    nameCity: yup.string().required().min(3),
  });
