import { Router } from "express";
import { generateToken } from "../utils/jwt.js";
import { InserirUsuario, ValidarCredenciais } from "../repository/UsuarioRepository.js";

const endpoints = Router();

endpoints.post('/criar/conta', async (req, res) => {
  try {
    const dados = req.body;
    const resposta = await InserirUsuario(dados);
    res.status(201).send({ id: resposta });
  } catch (err) {
    console.error(err);
    res.status(500).send({ erro: "Erro ao criar conta." });
  }
});

endpoints.post('/login', async (req, res) => {
  try {
    const { email, senha } = req.body;

    const resultado = await ValidarCredenciais(email, senha);

    if (resultado.length === 0) {
      return res.status(401).send({ mensagem: "Usuário ou senha incorretos!" });
    }

    const usuario = resultado[0];

    const token = generateToken({
      id: usuario.id_login,
      usuario: usuario.usuario_adm
    });

    res.send({
      mensagem: "Usuário logado com sucesso!",
      token
    });

  } catch (err) {
    console.error(err);
    res.status(500).send({ erro: "Erro no servidor." });
  }
});

export default endpoints;
