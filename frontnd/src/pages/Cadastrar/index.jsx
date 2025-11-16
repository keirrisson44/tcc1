import './index.scss'
import { useState } from "react";
import { useNavigate } from "react-router-dom";  
import api from "../../api";

export default function Cadastrar() {

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const navigate = useNavigate(); 

  async function cadastrarUser() {
    try {
      const resposta = await api.post("/usuario/cadastrar", {
        usuario,
        senha
      });

      setMensagem(resposta.data.mensagem);

   
      setTimeout(() => {
        navigate("/");
      }, 1000);

    } catch (err) {
      console.error(err);
      setMensagem("Erro ao cadastrar!");
    }
  }

  function sairRapido() {
    window.location.href = "https://www.google.com";
  }

  return (
    <div className='Cadastra'>
      <button className="saida" onClick={sairRapido}>
        saída rápida
      </button>

      <h1>Cadastro</h1>

      <label>
        <span>Nome de usuário</span>
        <input 
          type="text" 
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </label>

      <label className="senha-container">
        <span>Senha</span>

        <div className="input-senha">
          <input 
            type={mostrarSenha ? "text" : "password"}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <span 
            className="toggle-senha"
            onClick={() => setMostrarSenha(!mostrarSenha)}
          >
            {mostrarSenha ? "👁️" : "🙈"}
          </span>
        </div>
      </label>

      <button className="botao-cadastrar" onClick={cadastrarUser}>
        Cadastrar
      </button>

      {mensagem && <p className="msg">{mensagem}</p>}
    </div>
  )
}
