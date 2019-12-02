import React, { Component } from 'react';
import Input from '../../components/input/index'


class Form extends Component {
    state = {
        email: "",
        password: "",
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <main>

                <Input
                    label="Nombre"
                    type="text"
                    name="name"

                />
                <Input
                    label="Apellidos"
                    type="text"
                    name="lastname"
                />
                <Input
                    label="Correo electrónico"
                    type="email"
                    name="email"
                />
                <Input
                    label="Contraseña"
                    type="password"
                    name="password"
                />
                <Input
                    label="Numero de INE"
                    type="number"
                    name="ine"
                />
                <select name="genero" id="">
                    <option value="">Hombre</option>
                    <option value="">Mujer</option>
                </select>

            </main>

        );
    }
}

export default Form; 