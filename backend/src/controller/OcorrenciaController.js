import * as repo from "../repository/OcorrenciaRepository.js"

import multer from'multer';
import { Router } from "express";
import { getAuthentication } from "../utils/jwt.js";
const endpoints = Router();

const autenticador = getAuthentication();

const upload = multer({ dest: 'public/storage' })

endpoints.put('/boletim/:id/imagem', autenticador, upload.single('img'), async (req, resp) => {
  let caminho = req.file.path;
  let id = req.params.id;

  await repo.alterarImagem(id, caminho);
  resp.send();
})

export default endpoints;