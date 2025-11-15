import './index.scss';

export default function Complementar() {

     function sairRapido() {
    window.location.href = "https://www.google.com";
  }

  return (
    <div className="container">
      <div className="logo">
        <img src="image/elas.png" alt="Logo Luz por Elas" />
        <button className="saida" onClick={sairRapido}>
        saída rápida
      </button>
      </div>

      <h1>Complementar boletim</h1>

      <p>Para complementar um boletim de ocorrência, preencha as informações abaixo:</p>

      <label htmlFor="protocolo">Número Protocolo do Boletim</label>
      <div className="row">
        <input type="text" id="protocolo" placeholder="" />
        <input type="number" id="ano" placeholder="Ano" />
      </div>

      <label htmlFor="info">Novas Informações da agressão</label>
      <textarea id="info" rows="2"></textarea>

      <label>Documento</label>
      <div className="doc-options">
        <input type="radio" id="cpf" name="doc" value="CPF" />
        <label htmlFor="cpf">CPF</label>
        <input type="radio" id="rg" name="doc" value="RG" />
        <label htmlFor="rg">RG</label>
      </div>

      <label htmlFor="docnum">CPF ou RG</label>
      <input type="text" id="docnum" />

      <label>
        Quer tentar encontrar seu boletim de ocorrência na versão anterior da Delegacia Eletrônica?
      </label>
      <div className="radio-group">
        <label>
          <input type="radio" name="buscar" value="Sim" /> Sim
        </label>
        <label>
          <input type="radio" name="buscar" value="Não" /> Não
        </label>
      </div>

      <label>Enviar novas imagens</label>
      <div className="file-upload">📎 Enviar arquivo</div>

      <button className="submit-btn">Enviar Denúncia</button>
    </div>
  );
}
