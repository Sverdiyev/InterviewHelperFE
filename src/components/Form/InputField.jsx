import { TextField } from '@mui/material';
import React from 'react';

function InputField({ id, inputTouched, inputValid, inputValue, onInputChange, autoFocus }) {
  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        id={id}
        type={id === 'password' ? 'password' : 'text'}
        label={id[0].toUpperCase() + id.slice(1)}
        name={id}
        autoComplete={id}
        autoFocus={autoFocus}
        value={inputValue}
        onChange={onInputChange}
      />
      {inputTouched && !inputValid && `PLEASE CORRECT ${id}`}
    </>
  );
}

export default InputField;
