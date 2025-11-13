import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api"; 
import "./index.scss";

export default function Denuncia2() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    idade: "",
    cpf: "",
    contato: "",
    cep: "",
    bairro: "",
    rua: "",
    numero: "",
    descricao: "",
    data: "",
  });

  const [erros, setErros] = useState({});
  const [mensagem, setMensagem] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErros({ ...erros, [name]: "" });
  }

  function validarCampos() {
    const novosErros = {};
    if (!form.nome.trim()) novosErros.nome = "Digite o nome completo.";
    if (!form.idade.trim()) novosErros.idade = "Informe a idade.";
    if (!form.cpf.trim()) novosErros.cpf = "Informe o CPF ou RG.";
    if (!form.cep.trim()) novosErros.cep = "Digite o CEP.";
    if (!form.bairro.trim()) novosErros.bairro = "Informe o bairro.";
    if (!form.rua.trim()) novosErros.rua = "Informe a rua.";
    if (!form.numero.trim()) novosErros.numero = "Informe o número da residência.";
    if (!form.descricao.trim()) novosErros.descricao = "Descreva o ocorrido.";
    if (!form.data.trim()) novosErros.data = "Informe a data do ocorrido.";
    return novosErros;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errosValidados = validarCampos();
    if (Object.keys(errosValidados).length > 0) {
      setErros(errosValidados);
      return;
    }

    try {
      const token = localStorage.getItem("token"); // token do login
      const resposta = await api.post(
        "/adicionar",
        {
          nome_completo: form.nome,
          telefone_email: form.contato,
          CEP_vitima: form.cep,
          bairro: form.bairro,
          rua: form.rua,
          num_residencia: form.numero,
          complemento: null,
          CPF_RG: form.cpf,
          idade: form.idade,
          genero: null,
          convive_agressor: null,
          qnd_ocorreu: form.data,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMensagem("Denúncia registrada com sucesso!");
      console.log("✅ ID novo:", resposta.data.novoId);

      // Gera número de protocolo único (6 dígitos)
      const protocolo = Math.floor(100000 + Math.random() * 900000);

      // Redireciona para a página de confirmação com os dados
      navigate("/denunciaEnviada", {
        state: { protocolo, bairro: form.bairro },
      });
    } catch (err) {
      console.error("Erro ao enviar denúncia:", err);
      setMensagem("Erro ao enviar denúncia. Tente novamente.");
    }
  }

  return (
    <div className="denuncia2">
      <div className="logo">
        <img src="image/elas.png" alt="Logo Luz por Elas" />
        <button className="saida">Saída rápida</button>
      </div>

      <h1 className="ww">Registro de Violência Doméstica Contra a Mulher</h1>
      <p>
        A violência doméstica ocorre quando a mulher é vítima de qualquer ato ou
        omissão que cause morte, lesão, sofrimento físico, sexual, psicológico ou
        dano moral e patrimonial, dentro do lar, da família ou em relações afetivas.
      </p>

      <h3 className="we">Dados da vítima</h3>

      <form onSubmit={handleSubmit}>
        <div className="denunciaa">
          <div className="dados-da-vitima">
            <h3>Nome completo</h3>
            <input
              className="oii"
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
            />
            {erros.nome && <p className="erro">{erros.nome}</p>}

            <h3>Idade</h3>
            <input
              className="oii"
              type="number"
              name="idade"
              value={form.idade}
              onChange={handleChange}
            />
            {erros.idade && <p className="erro">{erros.idade}</p>}

            <h3>CPF ou RG</h3>
            <input
              className="oii"
              type="text"
              name="cpf"
              value={form.cpf}
              onChange={handleChange}
            />
            {erros.cpf && <p className="erro">{erros.cpf}</p>}

            <h3>Telefone ou e-mail (opcional)</h3>
            <input
              className="oii"
              type="text"
              name="contato"
              value={form.contato}
              onChange={handleChange}
            />
          </div>

          <div className="Endereco">
            <h3>CEP</h3>
            <input
              className="oii"
              type="text"
              name="cep"
              value={form.cep}
              onChange={handleChange}
            />
            {erros.cep && <p className="erro">{erros.cep}</p>}

            <h3>Bairro</h3>
            <input
              className="oii"
              type="text"
              name="bairro"
              value={form.bairro}
              onChange={handleChange}
            />
            {erros.bairro && <p className="erro">{erros.bairro}</p>}

            <h3>Rua</h3>
            <input
              className="oii"
              type="text"
              name="rua"
              value={form.rua}
              onChange={handleChange}
            />
            {erros.rua && <p className="erro">{erros.rua}</p>}

            <h3>Número da residência</h3>
            <input
              className="oii"
              type="number"
              name="numero"
              value={form.numero}
              onChange={handleChange}
            />
            {erros.numero && <p className="erro">{erros.numero}</p>}
          </div>

          <div className="dados-agressor">
            <h3 className="h33">Dados do agressor (opcional)</h3>
            <h3>Nome (se souber):</h3>
            <input className="oii" type="text" />
            <h3>Relação com a vítima:</h3>
            <input className="oii" type="text" />
            <h3>Endereço</h3>
            <input className="oii" type="text" />
          </div>

          <div className="detalhes-do-ocorrido">
            <h3 className="h33">Detalhes da ocorrência</h3>
            <h3>Descrição do ocorrido:</h3>
            <input
              className="oii"
              type="text"
              name="descricao"
              value={form.descricao}
              onChange={handleChange}
            />
            {erros.descricao && <p className="erro">{erros.descricao}</p>}

            <h3>Quando aconteceu?</h3>
            <input
              className="oii"
              type="date"
              name="data"
              value={form.data}
              onChange={handleChange}
            />
            {erros.data && <p className="erro">{erros.data}</p>}

            <h3>Envie fotos ou provas</h3>
            <div className="file-upload">📎 Enviar arquivo</div>

            <button type="submit" className="submit-btn">
              Enviar Denúncia
            </button>

            {mensagem && <p className="mensagem">{mensagem}</p>}
          </div>
        </div>
      </form>
    </div>
  );
}
