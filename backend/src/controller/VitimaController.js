
import { Router } from "express";
import * as repo from "../repository/VitimaRepository.js";
import jwt from "jsonwebtoken";

const router = Router();
const SECRET_KEY = "SUA_CHAVE_SECRETA"; 


function verificarToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).send({ erro: "Token não fornecido" });

  const token = authHeader.split(" ")[1]; 
  if (!token) return res.status(401).send({ erro: "Token inválido" });

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).send({ erro: "Token expirado ou inválido" });
    req.usuario = decoded; 
    next();
  });
}


router.post("/adicionar", verificarToken, async (req, res) => {
  try {
    const novaVitima = req.body;

 

    const novoId = await repo.inserirvitima(novaVitima);

    res.send({ novoId, mensagem: "Denúncia registrada com sucesso!" });
  } catch (err) {
    console.error("Erro ao adicionar vítima:", err);
    res.status(500).send({ erro: "Erro ao registrar denúncia" });
  }
});

export default router;
