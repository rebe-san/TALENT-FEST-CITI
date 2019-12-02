import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

const Input = (props) => {
    const {
        id,
        label,
        type,
        name,
        autoComplete,
        margin,
        variant,
        className,
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
            className={className}
            value={value}
            onChange={onChange}
        />
    )

}

export default Input;