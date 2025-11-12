import "./index.scss";

export default function DenunciaEnviada() {
  return (
    <div className="container11">
      <button className="saida-rapida">saída rápida</button>

      <div className="logo">
        <img src="image/elas.png" alt="Logo" />
      </div>

      <div className="titulo">DENÚNCIA ENVIADA</div>
      <div className="protocolo">
        NÚMERO DO PROTOCOLO: <span style={{ color: "#ffde00" }}>894749</span>
      </div>

      <div className="texto">
        Sua denúncia foi recebida com sucesso. Caso precise de ajuda imediata, ligue <strong>180</strong>.
        Lembre-se: você não está sozinha. Veja abaixo instituições que podem te oferecer apoio psicológico,
        jurídico e social.
      </div>

      <div className="subtitulo">ONGs, Centro de apoio e Abrigos próximos</div>

      <div className="instituicoes">
        <div className="instituicao">
          <h4>Instituto Maria da Penha</h4>
          <p>cidade/bairro</p>
          <span>(11) 98609-6720</span>
        </div>

        <div className="instituicao">
          <h4>Instituto Maria da Penha</h4>
          <p>cidade/bairro</p>
          <span>(11) 98609-6720</span>
        </div>

        <div className="instituicao">
          <h4>Instituto Maria da Penha</h4>
          <p>cidade/bairro</p>
          <span>(11) 98609-6720</span>
        </div>

        <div className="instituicao">
          <h4>Instituto Maria da Penha</h4>
          <p>cidade/bairro</p>
          <span>(11) 98609-6720</span>
        </div>
      </div>
    </div>
  );
}
