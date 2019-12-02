import React from 'react';
import TextField from '@material-ui/core/TextField';
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
        onChange
    } = props;
    return (
        
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
            />
        
    )

}

export default Input;