import { BrowserRouter , Routes , Route } from 'react-router-dom';
import App from './pages/inicio/index.jsx'
import Complementar from './pages/complementar/index.jsx';
import Denuncia1 from './pages/denuncia1/index.jsx';
import Denuncia2 from './pages/denuncia2/index.jsx';
import DenunciaEnviada from './pages/denunciaEnviada/index.jsx';
import Adimin from './pages/adimin/index.jsx';
import Login from './pages/login/index.jsx';

export default function Navegacao() {

    return(
        <BrowserRouter>
        <Routes>
        <Route path='/' element={ <Login/>} />    
        <Route path='/inicio' element={ <App/> } />
        <Route path='/denuncia1' element={ <Denuncia1/> } />
        <Route path='/denuncia2' element={ <Denuncia2/> } />
        <Route path='/denunciaEnviada' element={ <DenunciaEnviada/>} />
        <Route path='/complementar' element={ <Complementar/>} />
        <Route path='/Adimin' element={ <Adimin/>} />
        </Routes>
        </BrowserRouter>
    )
}