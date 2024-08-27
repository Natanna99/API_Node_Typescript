//Codigo base do servidor
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World Dev!");
});

export { app };
