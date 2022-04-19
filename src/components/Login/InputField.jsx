import React from 'react';
import { TextField, Typography } from '@mui/material';

function InputField({ id, error, inputValue, onInputChange, autoFocus, label, ...rest }) {
  return (
    <>
      <TextField
        margin="dense"
        required
        fullWidth
        id={id}
        type={id === 'password' ? 'password' : 'text'}
        label={label[0].toUpperCase() + label.slice(1)}
        name={id}
        autoComplete={id}
        autoFocus={autoFocus}
        value={inputValue}
        onChange={onInputChange}
        error={error}
        {...rest}
      />
      {error && (
        <Typography color="red" variant="body2" component="span">
          Enter valid {id}
        </Typography>
      )}
    </>
  );
}

export default InputField;
