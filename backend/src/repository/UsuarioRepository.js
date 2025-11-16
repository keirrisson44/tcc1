import { conection } from "./conection.js";


export async function buscarUsuarioPorEmailESenha(usuario, senha) {
  const comando = `
    SELECT id_login, usuario 
    FROM login
    WHERE usuario = ? AND senha = ?;
  `;
  const [resultado] = await conection.query(comando, [usuario, senha]);
  return resultado[0];
}


export async function cadastrarUsuario(usuario, senha) {
  const comando = `
    INSERT INTO login (usuario, senha)
    VALUES (?, ?);
  `;
  const [resultado] = await conection.query(comando, [usuario, senha]);
  return resultado.insertId; 
}
