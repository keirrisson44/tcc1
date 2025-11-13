import express from "express";
import cors from "cors";
import usuarioController from "./controller/UsuarioController.js";

const api = express();

api.use(cors({ origin: "http://localhost:5173" }));
api.use(express.json());


api.use(usuarioController);

api.listen(5000, () => console.log("API subiu com sucesso!"));