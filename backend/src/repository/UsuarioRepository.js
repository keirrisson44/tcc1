import { conection } from "./conection.js";

export async function buscarUsuarioPorEmailESenha(usuario, senha) {
  const comando = `
    SELECT id_login, usuario_adm FROM login
    WHERE usuario_adm = ? AND senha_adm = ?;
  `;
  const [resultado] = await conection.query(comando, [usuario, senha]);
  return resultado[0]; 
}
