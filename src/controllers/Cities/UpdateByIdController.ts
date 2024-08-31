import { Request, Response } from "express";

export const updateByIdCity = async (req: Request, res: Response) => {
  console.log(req.params);
  console.log(req.body);
  return res.send("Cidade por id!");
};
