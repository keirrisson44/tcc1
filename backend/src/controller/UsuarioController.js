import { Router } from "express";
import * as repo from "../repository/UsuarioRepository.js";
import jwt from "jsonwebtoken";

const router = Router();
const SECRET_KEY = "SUA_CHAVE_SECRETA";


router.post("/login", async (req, res) => {
  try {
    const { usuario, senha } = req.body;

    const user = await repo.buscarUsuarioPorEmailESenha(usuario, senha);
    if (!user)
      return res.status(401).send({ erro: "Usuário ou senha inválidos" });

    const token = jwt.sign(
      { id: user.id_login, usuario: user.usuario },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.send({ mensagem: "Login realizado com sucesso", token });
  } catch (err) {
    console.error("ERRO LOGIN:", err);
    res.status(500).send({ erro: "Erro ao autenticar usuário" });
  }
});


router.post("/cadastrar", async (req, res) => {
  try {
    const { usuario, senha } = req.body;

    if (!usuario || !senha)
      return res.status(400).send({ erro: "Preencha todos os campos" });

    const id = await repo.cadastrarUsuario(usuario, senha);

    res.send({
      mensagem: "Usuário cadastrado com sucesso!",
      id: id
    });

  } catch (err) {
    console.error("ERRO CADASTRO:", err);
    res.status(500).send({ erro: "Erro ao cadastrar usuário" });
  }
});

export default router;
