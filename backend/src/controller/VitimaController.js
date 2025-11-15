import * as repo from "../repository/VitimaRepository.js"
import { Router } from "express";
import { getAuthentication } from "../utils/jwt.js";

const endpoints = Router();
const autenticador = getAuthentication();

endpoints.post('/adicionar', autenticador, async (req, resp) => {
  try {
    let novavitima = req.body;

    console.log("Recebido do front:", novavitima);

    let id = await repo.inserirvitima(novavitima);

    resp.send({ novoId: id });
  } catch (err) {
    console.error("ERRO AO INSERIR VÍTIMA:", err);
    resp.status(500).send({ erro: err.message });
  }
});

export default endpoints;
