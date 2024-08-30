import { Router } from "express";
import { create } from "../controllers/Cities/CreateCityController";

const CitiesRouter = Router();

CitiesRouter.get("/", (req, res) => {
  res.send("Hello World Dev!");
});

CitiesRouter.post("/create", create);

export { CitiesRouter };
