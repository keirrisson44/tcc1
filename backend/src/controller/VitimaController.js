import * as repo from "../repository/VitimaRepository.js"

import { Router } from "express";
import { getAuthentication } from "../utils/jwt.js";
const endpoints = Router();

const autenticador = getAuthentication();

endpoints.post('/adicionar', autenticador, async (req, resp) => {
    let novavitima = req.body;
  
    let id = await repo.inserirvitima(novavitima);
    resp.send({ novoId: id });
})

export default endpoints;