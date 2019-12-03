import React, {Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import { FaCheck } from "react-icons/fa";
import './style.css';

const Input = (props) => {
    const {
        id,
        label,
        type,
        name,
        autoComplete,
        margin,
        variant,
        value,
        onChange,
        colorCheck
    } = props;
    return (
        <label className="input-form-container">
            <TextField
                id={id}
                label={label}
                type={type}
                name={name}
                autoComplete={autoComplete}
                margin={margin}
                variant={variant}
                value={value}
                onChange={onChange}
                className="input-form"
            />
            <FaCheck className={`${colorCheck  ? 'green': 'white'}`}/>
        </label>   
    )
}

export default Input;