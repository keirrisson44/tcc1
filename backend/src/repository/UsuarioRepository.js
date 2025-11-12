import { conection } from "./conection.js";

export async function InserirUsuario(NovosDados) {
    let [resultados] =  
        await conection.query(
            `INSERT INTO login (usuario_adm, senha_adm)
            VALUES (?, MD5(?))`, [NovosDados.usuario_adm, NovosDados.senha_adm]
        )

    return resultados.insertId;
}

export async function ValidarCredenciais(email, senha) {
    let [resultados] = 
        await conection.query(
            `SELECT * FROM login 
            WHERE usuario_adm = ? and senha_adm = MD5(?)`,
            [email, senha]
        )

    return resultados
}