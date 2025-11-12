import './index.scss';
import { Link } from 'react-router-dom';

export default function Rodape({ titulo1, titulo2, linkUrl, linkUrl2,  insta, img1, img2, img3 }) {
  return (
    <div className='Roda-pe'>
      <div className='conteudo'>
        <div className='coluna'>
          <h3>{titulo1}</h3>
          <Link to={linkUrl} className='Linkk'>complementar boletim</Link>
          <Link to={linkUrl2} className='Linkk'>acompanhar andamento</Link>
        </div>

        <div className='linha'></div>

        <div className='coluna'>
          <h3>{titulo2}</h3>
          <h4>{insta}</h4>
          <div className='redes'>
            {img1 && <img src={img1} alt="Rede 1" />}
            {img2 && <img src={img2} alt="Rede 2" />}
            {img3 && <img src={img3} alt="Rede 3" />}
          </div>
        </div>
      </div>
    </div>
  );
}