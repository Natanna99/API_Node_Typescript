import { Request, Response } from "express";

export const deleteById = async (req: Request, res: Response) => {
  console.log(req.params);
  res.send("Deletando cidade por ID");
};
