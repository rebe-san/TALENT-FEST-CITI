import React from 'react';
import Personita1 from '../../assets/img/Personita1.svg';
import Personita2 from '../../assets/img/personita2.svg';
import LogoCiti from '../../assets/img/logociti.svg';
import Mancha1 from '../../assets/img/manchita1.svg';
import Mancha2 from '../../assets/img/manchita2.svg';
import './style.css'

const Home = () => {
  return (
    <main>
      <figure>
        <img src={LogoCiti} alt="logo-citi" />
      </figure>

      <div className="row">
        <img src={Personita1} alt="persona-1" />
        <div className="box-mancha">
          <img className="img-home" src={Mancha1} alt="mancha-1" />
          <p className="text-home"> Obten tu cuenta sin necesidad de salir de casa</p>
        </div>
      </div> 
      <div className="row space">
        <div className="box-mancha">
          <img className="img-home" src={Mancha2} alt="mancha-1"/>
          <p className="text-home">La primera cuenta de debito con puntos premia</p>
        </div>
        <img src={Personita2} alt="persona-2" />
      </div>
      <div className="row">
        <img src={Personita1} alt="persona-1" />
        <div className="box-mancha">
          <img className="img-home" src={Mancha2} alt="mancha-2" />
          <p className="text-home"> Obten tu cuenta sin necesidad de salir de casa</p>
        </div>
      </div>

    </main>
  )

}

export default Home;