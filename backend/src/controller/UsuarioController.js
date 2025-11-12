import { Router } from "express";
import { generateToken } from "../utils/jwt.js";
import { InserirUsuario, ValidarCredenciais } from "../repository/UsuarioRepository";

const endpoints = Router();

endpoints.post('/criar/conta', async (req, res) => {
    try {
        let dados = req.body;

        let resposta = await InserirUsuario(dados);

        res.status(201).send(resposta)
    } catch (err) {
        console.error(err)
    }
})

endpoints.post('/login', async (req, res) => {
    let email = req.body.email;
    let senha = req.body.senha;


    let resposta = await ValidarCredenciais(email, senha);
    

    res.send({
        mensagem: "Usuario Logado com sucesso",
        token: generateToken(dados)
    })
})