import express from "express";
import cors from "cors";
import usuarioController from "./controller/UsuarioController.js";
import AgressorController from "./controller/AgressorController.js";
import OcorrenciaController from "./controller/OcorrenciaController.js";
import VitimaController from "./controller/VitimaController.js";

const api = express();

api.use(cors({ origin: "http://localhost:5173" }));
api.use(express.json());

api.use("/usuario", usuarioController);
api.use("/agressor", AgressorController);
api.use("/ocorrencia", OcorrenciaController);
api.use("/vitima", VitimaController);

api.listen(5000, () => console.log("API subiu com sucesso!"));
