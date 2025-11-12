import './index.scss';

export default function Adimin() {

    return(
        <div className='Adimin'>

            <img className='logo' src="image/elas.png"/>

            <button className='login'>Login</button>

            <div className='cadastro'>

                <img className='cadeado' src="image/image 20.png"/>

                <h2>Usuario</h2>
                <input className='inputt1' type="text" />

                <h3>senha</h3>
                <input className='inputt2' type="text" />

                <button className='botas'>Entra</button>

            </div>
            

        </div>
    )
}