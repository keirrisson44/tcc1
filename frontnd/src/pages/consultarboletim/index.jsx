import './index.scss'
import { useState } from "react";


export default function Consultar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => setMenuAberto(!menuAberto);

  const fecharMenuSeClicarFora = (event) => {
    const menu = document.getElementById("menu");
    const button = document.querySelector(".menu-btn");
    if (!button.contains(event.target) && !menu.contains(event.target)) {
      setMenuAberto(false);
    }
  };

 
  document.addEventListener("click", fecharMenuSeClicarFora);

  

  return (
    <div className='Consultar'>
      <header>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src="image/elas.png" alt="Logo" />
        </div>

        <div className="menu-container">
          <button className="menu-btn" onClick={toggleMenu}>
            ☰ Menu
          </button>
          <div className={`menu ${menuAberto ? "show" : ""}`} id="menu">
            <a href="#">instituições</a>
            <a href="#">relatório</a>
          </div>
        </div>
      </header>

      <section className="cards">
        <div className="card">
          <h2>5.682</h2>
          <p>Denúncias recebidas</p>
        </div>
        <div className="card">
          <h2>682</h2>
          <p>Boletim alterado</p>
        </div>
        <div className="card">
          <h2>200</h2>
          <p>Denúncias pendentes</p>
        </div>
      </section>

      <section className="tabela">
        <h3>Denúncias recebidas</h3>
        <table>
          <thead>
            <tr>
              <th>Protocolo</th>
              <th>Data</th>
              <th>Status</th>
              <th>Tipo de violência</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {[
              { protocolo: "5152654154", data: "18/09/2003", status: "Pendente", tipo: "Psicológica" },
              { protocolo: "5152654154", data: "18/09/2003", status: "Em análise", tipo: "Verbal" },
              { protocolo: "5152654154", data: "18/09/2003", status: "Pendente", tipo: "Física" },
              { protocolo: "5152654154", data: "18/09/2003", status: "Em análise", tipo: "Sexual" },
            ].map((denuncia, index) => (
              <tr key={index}>
                <td>{denuncia.protocolo}</td>
                <td>{denuncia.data}</td>
                <td>{denuncia.status}</td>
                <td>{denuncia.tipo}</td>
                <td>
                  <button className="btn">Ver detalhes</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div className="filtros">
        <input type="text" placeholder="tipo de violência" />
        <button>filtrar</button>
        <input type="text" placeholder="protocolo" />
        <button>filtrar</button>
      </div>
    </div>
  );
}
