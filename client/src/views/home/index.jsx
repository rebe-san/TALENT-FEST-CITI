import React from 'react';
import Personita1 from '../../assets/img/1.jpg';
import Personita2 from '../../assets/img/2.jpg';
import Personita3 from '../../assets/img/3.jpg';
import Billete from '../../assets/img/billete50.png';
import LogoCiti from '../../assets/img/logoCiti.png';
import {Link} from 'react-router-dom';
import './style.css'

const Home = () => {
  return (
    <main className="home">
      <figure>
        <img src={LogoCiti} alt="logo-citi" className="logo"/>
      </figure>
      <div className="row">
        <img src={Personita1} alt="persona-1" />
        <div className="box-mancha">
          <p className="text-home"> Obten tu cuenta sin necesidad de salir de casa</p>
        </div>
      </div> 
      <div className="row">
        <div className="box-mancha-2">
          <p className="text-home">La primera cuenta de debito con puntos premia</p>
        </div>
        <img src={Personita2} alt="persona-2" />
      </div>
      <div className="row">
        <img src={Personita3} alt="persona-1" />
        <div className="box-mancha">
          <p className="text-home"> Si invitas a dos amigos te aseguramos tu celular en caso de robo</p>
        </div>
      </div>
      <div className="billete">
        <div className="box-mancha-2">
          <p className="text-home">Activa tu cuenta con solo $50.00</p>
        </div>
          <img src={Billete} alt="persona-2"/>
      </div>
      <div className="button-footer">

        <Link className="button" to="/formulario">Abre tu cuenta al instante</Link>
      </div>
      
    </main>
  )

}

export default Home;