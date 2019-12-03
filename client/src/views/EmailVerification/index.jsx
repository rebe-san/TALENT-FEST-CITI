import React from 'react';
import Logo from '../../assets/img/logoCiti.png';
import Input from '../../components/input/index';
import {Link} from 'react-router-dom';
import './style.css'

// function Mailto({ email, subject, body, text}) {
//     return (
//       <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
//         {text}
//       </a>
//     );
//   }

const VerifyEmail = () => {
    const emailToVerify = localStorage.getItem("email")
    return(
        <main className="verify-email">
            <header className="header-form">
                <img src={Logo} alt="logo"/>
                <h2>Confirma tu correo electrónico</h2>
            </header>
            <div className="ball-container">
                <span className="ball"></span>
                <span className="filled ball"></span>
                <span className="ball"></span>                    
                <span className="ball"></span>
                </div>
            <p>Se ha enviado un código de confirmación a tu correo. Por favor ingresa el código aquí</p>
            <div className="code">
                <Input
                    label="Código"
                    type="number"
                />
            </div>
            <footer className="footer-form">
                    <Link className="button back" to="/formulario">Anterior</Link>
                    <Link className="button" >Siguiente</Link>
                </footer>
        </main>
    )
}

export default VerifyEmail;