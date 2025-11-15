import './index.scss'
import Rodape from '../../components/rodape'
import { useNavigate } from 'react-router-dom';

export default function App() {

 const navigate = useNavigate();

   function sairRapido() {
    window.location.href = "https://www.google.com";
  }

  return (

    <div className='inicio'>

       <div className="logo">
        <img src="image/elas.png" alt="Logo Luz por Elas" />
         <button className="saida" onClick={sairRapido}>
        saída rápida
      </button>
      </div>

      <br /><br /><br /><br />

      <div className='introdução'>

      <h1>UM SITE SEGURO PARA DENÚNCIAS</h1>
      <div className='mover'>
      <img className='imagemIntroducao' src="image/imagem.png"/>
      </div>
      <p className='chamado'>Violência doméstica: denunciar é o primeiro passo para <br /> interromper esse ciclo.</p>
          <button className="denuncia" onClick={() => navigate('/denuncia1')}>Fazer denúncia</button>
      <p className='chamado2'>Você não está sozinha. Estamos aqui para te ouvir e proteger.</p>

      </div>

      <div className='textos'>

        <div className='textoo'>

       <h2 className='titulo'>Sua Coragem Pode Salvar Vidas</h2>

       <p className='para'>Segundo o Anuário Brasileiro de Segurança Pública 2023, mais de 50 mil mulheres são vítimas de agressões todos os dias no Brasil — o equivalente a um estádio <br /> de futebol completamente lotado diariamente. <br/>
          Esses números chocantes mostram a urgência de enfrentarmos a violência contra a mulher e de fortalecermos a rede de apoio disponível. <br /> É essencial que cada mulher tenha acesso a canais seguros para pedir ajuda e denunciar abusos. <br />
          Acreditamos que informação salva vidas. Quanto mais mulheres tiverem coragem de denunciar, mais forte será a luta contra a violência, e mais próximo estaremos de construir uma sociedade segura e justa para todas.</p>

         </div>
         
         <div className='textoo2'>
        <h2 className='titulo'>Nosso Objetivo</h2>


        <p className='para'>Nosso propósito é oferecer um espaço seguro, sigiloso e acolhedor para mulheres que enfrentam situações de violência. Aqui, cada denúncia pode ser feita de forma protegida, sem medo de exposição. <br />
           Sua denúncia é encaminhada diretamente aos órgãos responsáveis para que as medidas necessárias sejam tomadas. Após a denúncia, você terá acesso a informações sobre abrigos seguros, <br /> atendimento psicológico e suporte jurídico, caso precise.
           Acreditamos que nenhuma mulher deve enfrentar isso sozinha. Estamos aqui para escutar, apoiar e ajudar no caminho para romper o ciclo da violência e construir uma nova história.</p>
          
          </div>

          <div className='textoo3'>

        <h2 className='titulo'>O Caminho Da Denúncia</h2>


        <p className='para'>Busque apoio emocional:converse com pessoas de confiança, como familiares, amigos ou profissionais especializados. Eles poderão oferecer suporte e orientações para ajudar você a lidar com a situação. <br />
           Contate a polícia:quando sua segurança estiver em risco imediato, ligue para o número de emergência da polícia, que é o 190. <br />Forneça o máximo de informações possíveis sobre a agressão sofrida e o agressor. <br />
           Procure auxílio jurídico:busque um advogado especializado em direito da mulher ou orientação nas Defensorias Públicas. <br />O auxílio também pode ser encontradoem organizações não governamentais que atuam na defesa dos direitos das mulheres.
           Busque apoio psicológico:psicólogos especializados em violência doméstica auxiliam na superação dos impactos psicológicos negativos e fornecem as ferramentas necessárias para reconstruir sua vida.</p>
            </div>
      </div>


     <Rodape
    titulo1="Serviços Disponíveis"
    linkUrl="/complementar"
    linkUrl2="/consultarboletim"
    titulo2="contato"
    insta="luzporelas@gmail.com"
    img1="image/likdin.png"
    img2="image/intagram.png"
    img3="image/facbo.png"
/>
    </div>  
  )
}
