import { conection } from "./conection.js";


export async function inserirvitima(novavitima) {
  const comando = `
    INSERT INTO vitima (nome_completo, telefone_email, CEP_vitima, bairro, rua, num_residencia, complemento, CPF_RG, idade, genero, convive_agressor, qnd_ocorreu)
               values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
  `

  const [info] = await conection.query(comando, [
    novavitima.nome_completo, novavitima.telefone_email, novavitima.CEP_vitima, 
    novavitima.bairro, novavitima.rua, novavitima.num_residencia, novavitima.complemento, 
    novavitima.CPF_RG, novavitima.idade, novavitima.genero, novavitima.convive_agressor, novavitima.qnd_ocorreu
  ])
  return info.insertId;
}
