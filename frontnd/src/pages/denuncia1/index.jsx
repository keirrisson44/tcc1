import './index.scss'
import Rodape from '../../components/rodape';
import { useNavigate } from 'react-router-dom';


export default function Denuncia1() {

  
 const navigate = useNavigate();

    return (
        <div className='Denuncia'>

        <div className="logo">

        <img src="image/elas.png" alt="Logo Luz por Elas" />
        <button className="saida">Saída rápida</button>

      </div>

      <h1>Violência Doméstica contra a Mulher</h1>
      <h2>Antes de começar é importante saber</h2>
      
      <div className='registro-crime'>

        <h3>Registro falso é Crime</h3>

        <div className='texto'>

            <p className='po'>A comunicação falsa de crime ou contravenção está sujeita às penas dos arts. 138, 339 e 340 do Código Penal Brasileiro.</p>
            <a className='vaa' href='https://www.delegaciaonline.rs.gov.br/dol/#!/index/codigoPenal'>Saiba mais.</a>
            <button className='bo'>Entendi</button>

        </div>

          <h3>Fora de São Paulo</h3>


        <div className='text'>

            <p className='p'>O fato ocorrido fora do Estado de São Paulo NÃO poderá ser registrado no site Luz Por Elas. Nesses casos, o registro deverá ser feito pessoalmente em qualquer Delegacia de Polícia.</p>
            <button className='b'>Entendi</button>

        </div>

        <h3>Fora de São Paulo</h3>

        <div className='texe'>

            <p className='para'>Em caso de NÃO atendimento de quaisquer das orientações, sua solicitação de registro de ocorrência policial será cancelada.</p>
            <button className='bot' onClick={() => navigate('/denuncia2')}>Entendi quero denunciar</button>

        </div>


      </div>

      <br /><br />

   <Rodape
     titulo1="Serviços Disponíveis"
     linkUrl="/complementar"
     linkUrl2="/"
     titulo2="contato"
     insta="luzporelas@gmail.com"
     img1="image/likdin.png"
     img2="image/intagram.png"
     img3="image/facbo.png"
/>

      
       
        </div>
    )
}