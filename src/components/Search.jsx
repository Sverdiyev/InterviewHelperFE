import React, { useState } from 'react';
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { Clear as ClearIcon } from '@mui/icons-material';

function Search({ setSearchValue }) {
  const [inputValue, setInputValue] = useState('');

  const searchHandler = () => setSearchValue(inputValue);

  const clearHandler = () => {
    setInputValue('');
    setSearchValue('');
  };

  return (
    <Grid container sx={{ width: '60%' }}>
      <TextField
        sx={{ width: '60%' }}
        size="small"
        margin="normal"
        id="search"
        variant="outlined"
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') searchHandler();
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: inputValue && (
            <InputAdornment position="end">
              <IconButton onClick={clearHandler}>
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </Grid>
  );
}

export default Search;
