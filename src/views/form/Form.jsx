import React, { Component } from 'react';
import Input from '../../components/input/Input'

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
                    name="name"
                />
                <Input
                    label="Apellidos"
                    name="lastname"
                />
                <Input
                    label="Correo electrónico"
                    name="email"
                />
                <Input
                    label="Contraseña"
                    name="password"
                    type="password"
                />
                <Input
                    label="Confirmar contraseña"
                    name="password"
                    type="password"
                />
                <Input
                    label="Teléfono"
                    name="phone"
                    type="number"
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