import { useLocation } from "react-router-dom";
import "./index.scss";

export default function DenunciaEnviada() {

  const location = useLocation();

  const protocolo = location.state?.protocolo || "—";
  const instituicoes = location.state?.instituicoes || [];

  function sairRapido() {
    window.location.href = "https://www.google.com";
  }

  return (
    <div className="container11">
      <button className="saida-rapida" onClick={sairRapido}>
        saída rápida
      </button>

      <div className="logo">
        <img src="image/elas.png" alt="Logo Luz por Elas" />
      </div>

      <div className="titulo">DENÚNCIA ENVIADA</div>

      <div className="protocolo">
        NÚMERO DO PROTOCOLO:{" "}
        <span style={{ color: "#ffde00" }}>{protocolo}</span>
      </div>

      <div className="texto">
        Sua denúncia foi recebida com sucesso.
        <br />
        Caso precise de ajuda imediata, ligue <strong>180</strong>.
        <br />
        Lembre-se: você não está sozinha.
        <br />
        Veja abaixo instituições próximas que podem oferecer ajuda.
      </div>

      <div className="subtitulo">
        ONGs, Centros de Apoio e Abrigos próximos
      </div>

      <div className="instituicoes">
        {instituicoes.map((inst, index) => (
          <div className="instituicao" key={index}>
            <h4>{inst.nome}</h4>
            <p><strong>Bairro procurado:</strong> {inst.bairroPesquisado}</p>
            <p><strong>Endereço:</strong> {inst.endereco}</p>
            <span><strong>Telefone:</strong> {inst.telefone}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
