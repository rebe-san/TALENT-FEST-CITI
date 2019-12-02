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
                />
                <Input
                    label="Apellidos"
                />
                <Input
                    label="Correo electrónico"
                />
                <Input
                    label="Contraseña"
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