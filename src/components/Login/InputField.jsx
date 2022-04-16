import React from 'react';
import { TextField, Typography } from '@mui/material';

function InputField({ id, error, inputValue, onInputChange, autoFocus }) {
  return (
    <>
      <TextField
        margin="dense"
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
        error={error}
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
