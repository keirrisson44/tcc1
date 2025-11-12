import { conection } from "./conection.js";


export async function inseriragressor(novoagressor) {
  const comando = `
    INSERT INTO agressor (nome, relacao_vitima, endereco, descr_ocorrido)
               values (?, ?, ?, ?);
  `

  const [info] = await conection.query(comando, [
    novoagressor.nome, 
    novoagressor.relacao_vitima, 
    novoagressor.endereco, 
    novoagressor.descr_ocorrido
  ])
  return info.insertId;
}
