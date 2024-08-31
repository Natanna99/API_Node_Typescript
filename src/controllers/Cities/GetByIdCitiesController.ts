import { Request, Response } from "express";
import { ParamsCitiesInterface } from "../../interface/Cities";

export const getByIdCities = async (
  req: Request<ParamsCitiesInterface>,
  res: Response
) => {
  console.log(req.params);
  return res.send("Cidade por id!");
};
