import React, { Component } from 'react';
import Input from '../../components/input/index';
import Logo from '../../assets/img/logoCiti.png';
import axios from "axios";
import {Link} from 'react-router-dom';
import './style.css'

class Form extends Component {

    constructor(){
        super();
        this.state = {
            name: "",
            lastname:"",
            email: "",
            password: "",
            street:"",
            num_ext:"", 
            num_int:"",
            colonia:"",
            cp:"",
            phone:"",
            number_id:"",
            curp:"",
            nameColor: false,
            lastnameColor: false,
            emailColor: false,
            passwordColor: false,
            password2:"",
            password2Color: false,
            streetColor: false,
            numExtColor: false,
            numIntColor: false,
            colonyColor: false,
            CPColor: false,
            phoneColor:false,
            ID: "",
            IDNumberColor: false,
            CURPColor: false
          };
            //  This is necessary to make 'this' work in the callback
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
        if(this.state.name.length > 1){
            this.setState({nameColor: true})
        }
    }

    handleLastnameChange = (e) => {
        this.setState({ lastname: e.target.value });
        if(this.state.lastname.length > 1){
            this.setState({lastnameColor: true})
        }
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
        if(this.state.email.length > 1){
            localStorage.setItem("email", this.state.email)
            this.setState({emailColor: true})
        }
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
        if(this.state.password.length > 5){
            this.setState({passwordColor: true})
        }
    }
   
    handleChangeStreet = (e) => {
        this.setState({street: e.target.value});
        if(this.state.street.length > 2){
            this.setState({streetColor: true})
        }
    }
    
    handlePassword2Change = (e) => {
        this.setState({ password2: e.target.value });
        if(this.state.password2 !== this.state.password){
            console.log('Tus contraseñas no son iguales')
        }
        if(this.state.password === this.state.password2){
            this.setState({password2Color: true})
        }
    }

    handleNumExtChange = (e) => {
        this.setState({num_ext: e.target.value});
        if(this.state.num_ext.length > 1){
            this.setState({numExtColor: true})
        }
    }

    handleNumIntChange = (e) => {
        this.setState({num_int: e.target.value})
        if(this.state.num_int.length > 0){
            this.setState({numIntColor: true})
        }
    }

    handleColonyChange = (e) => {
        this.setState({colonia: e.target.value})
        if(this.state.colonia.length > 1){
            this.setState({colonyColor: true})
        }
    }

    handleCPChange = (e) => {
        this.setState({cp: e.target.value})
        if(this.state.cp.length > 1){
            this.setState({CPColor: true})
        }
    }

    handlePhoneChange = (e) => {
        this.setState({phone: e.target.value})
        if(this.state.phone.length > 5){
            this.setState({phoneColor: true})
        }
    }

    handleIDChange =(e) => {
        console.log(e.target.value)
        this.setState({ID: e.target.value})
    }

    handleIDNumberChange = (e) => {
        this.setState({number_id: e.target.value})
        if(this.state.number_id.length > 9){
            this.setState({IDNumberColor: true})
        }
    }

    handleCURPChange = (e) => {
        this.setState({curp: e.target.value})
        if(this.state.curp.length === 18){
            this.setState({CURPColor: true})
        }
    }


    handleSubmit = e => {
        e.preventDefault();
        const user = {
          name: this.state.name,
          lastname: this.state.lastname,
          email: this.state.email,
            password: this.state.password,
            street:this.state.street,
            num_ext:this.state.num_ext, 
            num_int:this.state.num_int,
            colonia:this.state.colonia,
            cp:this.state.cp,
            phone:this.state.phone,
            number_id:this.state.number_id,
            curp:this.state.curp
        
        };
        axios.post("/api/users/", user)
          .then(res => {
            this.setState({
                name: "",
                lastname:"",
                email: "",
                password: "",
                street:"",
                num_ext:"", 
                num_int:"",
                colonia:"",
                cp:"",
                phone:"",
                number_id:"",
                curp:""
            });
            this.props.history.push("/");
          })
          .catch(err => {
            console.log("Error in CreateBook!");
          });
      };
    
    render() {
        return (
            <main className="form">
                <header className="header-form">
                    <img src={Logo} alt="logo"/>
                    <h2>Registra tus datos</h2>
                </header>
                <div className="ball-container">
                    <span className="filled ball"></span>
                    <span className="ball"></span>
                    <span className="ball"></span>
                </div>
                <form noValidate onSubmit={this.handleSubmit} >
                    <Input
                        label="Nombre"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        colorCheck={this.state.nameColor}
                    />
                    <Input
                        label="Apellidos"
                        type="text"
                        name="lastname"
                        value={this.state.lastname}
                        onChange={this.handleLastnameChange}
                        colorCheck={this.state.lastnameColor}
                    />
                    <Input
                        label="Correo electrónico"
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        colorCheck={this.state.emailColor}
                    />
                    <div className="select-container">
                        <Input
                            label="Contraseña"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                            colorCheck={this.state.passwordColor}
                        />
                        <Input
                            label="Confirmar contraseña"
                            name="password"
                            type="password"

                            value={this.state.password2}
                            onChange={this.handlePassword2Change}
                            colorCheck={this.state.password2Color}
                        />
                    </div>
                    <Input
                        label="Calle o Avenida"
                        type="text"
                        name="street"
                        value={this.state.street}
                        onChange={this.handleChangeStreet}
                        colorCheck={this.state.streetColor}
                    />
                    <div className="select-container">
                        <Input
                            label="Número ext."
                            type="number"
                            name="num_ext"
                            value={this.state.num_ext}
                            onChange={this.handleNumExtChange}
                            colorCheck={this.state.numExtColor}
                        />
                        <Input
                            label="Número int."
                            type="number"
                            name="num_int"
                            value={this.state.num_int}
                            onChange={this.handleNumIntChange}
                            colorCheck={this.state.numIntColor}
                        />
                    </div>
                    <div className="select-container">
                        <Input
                            label="Fraccionamiento o colonia"
                            type="text"
                            name="colonia"
                            value={this.state.colonia}
                            onChange={this.handleColonyChange}
                            colorCheck={this.state.colonyColor}
                        />
                        <Input
                            label="C.P."
                            type="number"
                            name="cp"
                            value={this.state.cp}
                            onChange={this.handleCPChange}
                            colorCheck={this.state.colorCheck}
                        />
                    </div>
                    <Input
                        label="Teléfono"
                        name="phone"
                        type="number"
                        value={this.state.phone}
                        onChange={this.handlePhoneChange}
                        colorCheck={this.state.phoneColor}
                    />
                    <div className="select-container">
                        <select name="genero" id="" className="drops" onChange={this.handleIDChange}>
                                <option value="ID">Selecciona tu Identificación</option>
                                <option value="INE">INE</option>
                                <option value="IFE">IFE</option>
                                <option value="LIC">Licencia para conducir</option>
                                <option value="PASSPORT">Pasaporte mexicano</option>
                        </select>
                        <Input
                            label="Numero de identificación"
                            type="number"
                            name="number_id"
                            value={this.state.number_id}
                            onChange={this.handleIDNumberChange}
                            colorCheck={this.state.IDNumber}
                        />

                    </div>
                    <Input
                        label="CURP"
                        type="text"
                        name="curp"
                        value={this.state.curp}
                        onChange={this.handleCURPChange}
                        colorCheck={this.state.CURPColor}
                    />
                    <p className="curp">Si no conoces tu CURP, puedes obtenerlo en esta <a href="https://www.gob.mx/curp/" target="_blank">liga</a> </p>                    
                    <div className="select-container">
                        <select name="genero" id="" className="drops">
                            <option value="">Selecciona tu género</option>
                            <option value="">Hombre</option>
                            <option value="">Mujer</option>
                            <option value="">Prefiero no decirlo</option>
                        </select>
                        <select name="occupation" id="" className="drops">
                        <option value="">Selecciona tu ocupación</option>
                            <option value="">Estudiante</option>
                            <option value="">Empleado</option>
                            <option value="">Desempleado</option>
                            <option value="">Prefiero no decirlo</option>
                        </select>
                    </div>
                    <input className="button" type="submit"/>
                </form>
                <footer className="footer-form">
                    <Link className="button back" to="/">Anterior</Link>
                    <Link className="button" to="/verificar-correo">Siguiente</Link>
                </footer>
            </main>
        );
    }
}

export default Form; 