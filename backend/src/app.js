import { adicionarRotas } from './rotas.js';

import express from "express"
const api = express();
api.use(express.json()); 

adicionarRotas(api);

api.listen(5173, () => console.log('API subiu com sucesso!'));

