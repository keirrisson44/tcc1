import { conection } from "./conection.js";
export async function Consultarboletim() {
    const comando = `
       select 
      id_vitima,
      num_protoc_boletim,
      novas_info_agracao,
      ano_protoc_boletim,
      CPF_RG,
      enc_boletim
    from boletim
    where id_vitima = ?
    `
  
    const [registros] = await conection.query(comando)
    return registros;
  }



export async function alterarImagem(id, caminho) {
    const comando = `
      UPDATE boletim
         SET img_boletim = ?
       WHERE id_boletim = ?
    `
  
    const [info] = await conection.query(comando, [caminho, id])
  }