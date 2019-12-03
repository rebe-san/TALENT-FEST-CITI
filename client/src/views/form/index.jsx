import React, { Component } from 'react';
import Input from '../../components/input/index';
import Logo from '../../assets/img/logoCiti.png';
import axios from "axios";
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
            curp:""
          };
            //  This is necessary to make 'this' work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
   
       

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
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
        //   author: this.state.author,
        //   description: this.state.description,
        //   published_date: this.state.published_date,
        //   publisher: this.state.publisher
        };
        // axios.post method to send an HTTP POST request to the back-end endpoint http://localhost:4000/api/books.
        //  This endpoint is expecting to get the new book object in JSON format in the request body.
        // Therefore we need to pass in the book object as a second argument.
        axios
          // .post("http://localhost:4000/api/books", book)
                .post("http://localhost:5000/api/users", user)
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
        // console.log(`Form submitted:`);
        // console.log(`${user.name}`)
        // console.log(`${user.lastname}`)

      };
    render() {
        return (
            <main className="form">
                <header className="header-form">
                    <img src={Logo} alt="logo"/>
                    <h2>Registra tus datos</h2>
                </header>
                <div className="ball-container">
                    <span className="one ball"></span>
                    <span className="two ball"></span>
                    <span className="three ball"></span>
                </div>
                <form noValidate onSubmit={this.handleSubmit} >
                    <Input
                        label="Nombre"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <Input
                        label="Apellidos"
                        type="text"
                        name="lastname"
                        value={this.state.lastname}
                        onChange={this.handleChange}
                    />
                    <Input
                        label="Correo electrónico"
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <div className="select-container">
                        <Input
                            label="Contraseña"
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <Input
                            label="Confirmar contraseña"
                            name="password"
                            type="password"
                            
                        />
                    </div>
                    <Input
                        label="Calle o Avenida"
                        type="text"
                        name="street"
                        value={this.state.street}
                        onChange={this.handleChange}
                    />
                    <div className="select-container">
                        <Input
                            label="Número ext."
                            type="number"
                            name="num_ext"
                            value={this.state.num_ext}
                            onChange={this.handleChange}
                        />
                        <Input
                            label="Número int."
                            type="number"
                            name="num_int"
                            value={this.state.num_int}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="select-container">
                        <Input
                            label="Fraccionamiento o colonia"
                            type="text"
                            name="colonia"
                            value={this.state.colonia}
                            onChange={this.handleChange}
                        />
                        <Input
                            label="C.P."
                            type="number"
                            name="cp"
                            value={this.state.cp}
                            onChange={this.handleChange}
                        />
                    </div>
                    <Input
                        label="Teléfono"
                        name="phone"
                        type="number"
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                    <div className="select-container">
                        <select name="genero" id="" className="drops">
                                <option value="">Selecciona tu Identificación</option>
                                <option value="">INE</option>
                                <option value="">IFE</option>
                                <option value="">Licencia para conducir</option>
                                <option value="">Pasaporte mexicano</option>
                        </select>
                        <Input
                            label="Numero de identificación"
                            type="number"
                            name="number_id"
                            value={this.state.number_id}
                            onChange={this.handleChange}
                        />

                    </div>
                    <Input
                        label="CURP"
                        type="text"
                        name="curp"
                        value={this.state.curp}
                        onChange={this.handleChange}
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
            </main>

        );
    }
}

export default Form; 