import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CitiesCreateInterface } from "../../interface/Cities";

//Metodo de criação de cidade
export const create = async(
  req: Request<object, object, CitiesCreateInterface>,
  res: Response,
) => {
  
  console.log(req.body);
  return res.status(StatusCodes.CREATED).send("Criado com sucesso!");
};
