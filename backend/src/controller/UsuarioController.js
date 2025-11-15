import { Router } from "express";
import * as repo from "../repository/UsuarioRepository.js";
import jwt from "jsonwebtoken";

const router = Router();
const SECRET_KEY = "SUA_CHAVE_SECRETA";

router.post("/login", async (req, res) => {
  try {
    const { email, senha } = req.body; // front envia email, mas na tabela é usuario_adm

    const usuario = await repo.buscarUsuarioPorEmailESenha(email, senha); // email aqui é na verdade usuario_adm
    if (!usuario) return res.status(401).send({ erro: "Usuário ou senha inválidos" });

    const token = jwt.sign({ id: usuario.id_login, usuario: usuario.usuario_adm }, SECRET_KEY, { expiresIn: "1h" });

    res.send({ mensagem: "Login realizado com sucesso", token });
  } catch (err) {
    console.error("ERRO LOGIN:", err);
    res.status(500).send({ erro: "Erro ao autenticar usuário" });
  }
});

export default router;
