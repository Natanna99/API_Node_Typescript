import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CitiesCreateInterface } from "../../interface/Cities";
import { schemaCreateCity } from "../../schema/CitiesSchame";
import * as yup from "yup";

export const create = async(
  req: Request<object, object, CitiesCreateInterface>,
  res: Response,
) => {
  let validateData: CitiesCreateInterface | undefined;

  try{
    //abortEarly: false para retornar todos os erros de uma vez
    validateData = await schemaCreateCity.validate(req.body, {abortEarly: false});
  }catch(err){
    //Caso ocorra um erro de validação, o erro é do tipo yup.ValidationError
    const yupError = err as yup.ValidationError;
    
    //Record<string, string> é um objeto que aceita qualquer chave e valor como string
    //Mapia os erros de validação para um objeto de erros
    const errors: Record<string, string> = {};

    //Percorre o array de erros de validação e mapeia para um objeto de erros
    yupError.inner.forEach((error) => {
      if(error.path){
        errors[error.path] = error.message;
      } 
    });

    //Retorna os erros de validação
    return res.status(StatusCodes.BAD_REQUEST).json({errors});
  }

  console.log(validateData);
  return res.status(StatusCodes.CREATED).send();
};
