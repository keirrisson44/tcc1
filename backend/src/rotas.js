import express from 'express'
import AgressorController from "./controller/AgressorController.js"
import OcorrenciaController from "./controller/OcorrenciaController.js"
import VitimaController from "./controller/VitimaController.js"



export function adicionarRotas(api) {
  api.use(AgressorController);
  api.use(OcorrenciaController);
  api.use(VitimaController);

  api.use('/public/storage', express.static('public/storage'))
}
