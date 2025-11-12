import * as repo from '../repository/AgressorRepository.js';

import { Router } from "express";
import { getAuthentication } from '../utils/jwt.js';
const endpoints = Router();
let autenticador = getAuthentication();

endpoints.post('/adicionar', autenticador, async (req, resp) => {
  let novoagressor = req.body;

  let id = await repo.inseriragressor(novoagressor);
  resp.send({ novoId: id });
})



export default endpoints;