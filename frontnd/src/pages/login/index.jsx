import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import api from "../../api";
import "./index.scss";
import { Link } from "react-router-dom";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const navigate = useNavigate();  

  async function entrar(e) {
    e.preventDefault(); 

    try {
      const resposta = await api.post("/usuario/login", {
        usuario: usuario,
        senha: senha,
      });

      console.log(resposta.data);
      setMensagem(resposta.data.mensagem || "Login realizado com sucesso!");

      if (resposta.data.token) {
        localStorage.setItem("token", resposta.data.token);

      
        navigate("/inicio");
      }

    } catch (err) {
      console.error(err);
      setMensagem("Usuário ou senha incorretos!");
    }
  }
     function sairRapido() {
    window.location.href = "https://www.google.com";
  }

  return (
    <div className="login-container">
       <button className="saida" onClick={sairRapido}>
        saída rápida
      </button>
      <div className="form-box">
        <div className="tab">Login</div>
        <img src="./image/image 20.png" alt="Cadeado" className="icon" />

        <form className="login-form" onSubmit={entrar}>
          <div className="inputs">
            <label htmlFor="usuario">Usuário:</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />

            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />

            <button className="button" type="submit">ENTRAR</button>
          </div>
        </form>

        {mensagem && <p className="mensagem">{mensagem}</p>}

        <Link className="cadastroo" to={"/Cadastrar"}>Cadastre-se agora</Link>
      </div>
    </div>
  );
}
