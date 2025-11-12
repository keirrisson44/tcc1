import './index.scss';
import { useNavigate } from 'react-router-dom';


export default function Denuncia2() {
    const navigate = useNavigate();
    return(
       <div className='denuncia2'> 

            <div className="logo">

        <img src="image/elas.png" alt="Logo Luz por Elas" />
        <button className="saida">Saída rápida</button>

      </div>



        <h1 className='ww'>Registro de Violência Doméstica Contra a Mulher</h1>

      <p>A violência doméstica ocorre quando a mulher é vítima de qualquer ato ou omissão que cause morte, lesão, sofrimento físico, sexual, psicológico ou dano moral e patrimonial, dentro do lar, da família ou em relações afetivas.Exemplos incluem agressões como tapas, chutes, empurrões, perseguições e destruição de pertences.   </p>


      <h3 className='we'>Dados da vítima</h3>

     
<div className='denunciaa'>

  <div className='dados-da-vitima'>

    <h3>Nome completo</h3>
    <input className='oii' type="text" />

    <h3>Idade</h3>
    <input className='oii' type="number" />

    <h3>CPF ou RG</h3>
    <input className='oii' type="text" />

    <h3>Telefone ou e-mail (opcional):</h3>
    <h4>Para contato ou retorno, se desejar</h4>
    <input className='oii' type="text" />

    <h3>Você ainda convive com o agressor?</h3>
    <div className="radio-group">
      <label>
        <input className='oii' type="radio" name="convive" value="sim" />
        Sim
      </label>
      <label>
        <input type="radio" name="convive" value="nao" />
        Não
      </label>
      <label>
        <input type="radio" name="convive" value="prefiro" />
        Prefiro não informar
      </label>
    </div>
  </div>

  <div className='Endereco'>
    <h3>Cep</h3>
    <input className='oii' type="text" />
    <h3>Bairro</h3>
    <input className='oii' type="text" />
    <h3>Rua</h3>
    <input className='oii' type="text" />
    <h3>Numero da residência</h3>
    <input className='oii' type="number" />
  </div>

  <div className='dados-agressor'>
    <h3 className='h33'>Dados do agressor (se desejar informar)</h3>
    <h3>Nome (se souber):</h3>
    <input className='oii' type="text" />
    <h3>Relação com a vítima:</h3>
    <input className='oii' type="text" />
    <h3>Endereço</h3>
    <input className='oii' type="text" />
  </div>

  <div className='detalhes-do-ocorrido'>
    <h3 className='h33'>Detalhes da ocorrência</h3>

    <h3>Tipo de violência</h3>
    <h4>(Marque uma ou mais opções)</h4>

    <div className="radio-group">
      <label><input type="checkbox" name="tipo" value="fisica" /> Física (agressões, empurrões...)</label>
      <label><input type="checkbox" name="tipo" value="psicologica" /> Psicológica (ameaças...)</label>
      <label><input type="checkbox" name="tipo" value="sexual" /> Sexual (coerção, abuso...)</label>
      <label><input type="checkbox" name="tipo" value="patrimonial" /> Patrimonial (quebra de objetos...)</label>
      <label><input type="checkbox" name="tipo" value="moral" /> Moral (difamação...)</label>
    </div>

    <h3>Descrição do ocorrido:</h3>
    <input className='oii' type="text" />

    <h3>Quando aconteceu?</h3>
    <h4>Data ou período aproximado</h4>
    <input className='oii' type="date" />

    <h3>Envie fotos ou provas</h3>
    <label>Enviar novas imagens</label>
    <div className="file-upload">📎 Enviar arquivo</div>

    <button className="submit-btn" onClick={() => navigate('/denunciaEnviada')} >Enviar Denúncia</button>
  </div>

</div>


       </div>
    )
}