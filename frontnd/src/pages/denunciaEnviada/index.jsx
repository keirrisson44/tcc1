import { useLocation } from "react-router-dom";
import "./index.scss";

export default function DenunciaEnviada() {

  const location = useLocation();


  const protocolo = location.state?.protocolo || "—";
  const bairro = location.state?.bairro || "Cidade/Bairro";

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
        Veja abaixo instituições que podem te oferecer apoio psicológico,
        jurídico e social.
      </div>

      <div className="subtitulo">
        ONGs, Centros de Apoio e Abrigos próximos
      </div>

      <div className="instituicoes">
        <div className="instituicao">
          <h4>Instituto Maria da Penha</h4>
          <p>{bairro}</p>
          <span>(11) 98609-6720</span>
        </div>

        <div className="instituicao">
          <h4>Casa da Mulher Brasileira</h4>
          <p>{bairro}</p>
          <span>(11) 98555-4411</span>
        </div>

        <div className="instituicao">
          <h4>Centro de Referência da Mulher</h4>
          <p>{bairro}</p>
          <span>(11) 97222-1144</span>
        </div>

        <div className="instituicao">
          <h4>Rede Feminina de Combate à Violência</h4>
          <p>{bairro}</p>
          <span>(11) 97444-9988</span>
        </div>
      </div>
    </div>
  );
}
