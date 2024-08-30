import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { Schema, ValidationError } from "yup";

//Definição do tipo de validação
type PropertyType = "body" | "header" | "params" | "query";

//Definição do tipo de propriedades de validação
//Record é um tipo de objeto que aceita qualquer chave e valor
type AllPropertiesType = Record<PropertyType, Schema>;

//Varivel de tipo com campos de validação de requisição
//Partial é um tipo que torna todas as propriedades de um tipo opcional (Nem todos os campos do type são obrigatórios)
type ValidationType = (field: Partial<AllPropertiesType>) => RequestHandler;

//RequestHandler é um tipo de função que recebe um Request, Response e NextFunction
//Função de validação de corpo de requisição
//Recebe um campo (schemas) que é um parametro com os tipos de requesição que serão validados
export const validator: ValidationType =
  (schemas) => async (req, res, next) => {
    //errorsResult é um objeto que armazena os erros de validação
    const errorsResult: Record<string, Record<string, string>> = {};

    //Object.entries pega um objeto e transforma em um array de arrays
    //O primeiro valor é a chave e o segundo é o valor (key= tipo de requisição, schema= esquema de validação)
    Object.entries(schemas).forEach(([key, schema]) => {
      try {
        //abortEarly: false para retornar todos os erros de uma vez
        schema.validateSync(req[key as PropertyType], { abortEarly: false });
        //Caso a validação ocorra com sucesso, chama o próximo middleware ou função de controle
      } catch (err) {
        //Caso ocorra um erro de validação, o erro é do tipo ValidationError
        const yupError = err as ValidationError;

        //Record<string, string> é um objeto que aceita qualquer chave e valor como string
        //Mapia os erros de validação para um objeto de erros
        const errors: Record<string, string> = {};

        //Percorre o array de erros de validação e mapeia para um objeto de erros
        yupError.inner.forEach((error) => {
          if (error.path) {
            errors[error.path] = error.message;
          }
        });

        //Adiciona os erros no objeto de erros
        errorsResult[key] = errors;
      }
    });

    //Caso exista erros de validação, retorna os erros
    //Caso contrário, chama o próximo middleware ou função de controle
    if (Object.entries(errorsResult).length > 0) {
      return res.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult });
    } else {
      return next();
    }
  };
