import { Request, Response } from "express";
import { QueryCitiesInterface } from "../../interface/Cities";

export const getAllCities = async (
  req: Request<object, object, object, QueryCitiesInterface>,
  res: Response
) => {
  console.log(req.query);

  return res.send("Todas as cidades!");
};
