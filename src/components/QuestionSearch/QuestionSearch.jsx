import React, { useState } from 'react';
import { Grid, IconButton, InputAdornment, LinearProgress, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { Clear as ClearIcon } from '@mui/icons-material';

function QuestionSearch({ setSearchValue, isLoading }) {
  const [inputValue, setInputValue] = useState('');

  const searchHandler = () => setSearchValue(inputValue);

  const clearHandler = () => {
    setInputValue('');
    setSearchValue(inputValue);
  };

  return (
    <Grid container sx={{ width: '60%', margin: '1rem 0' }}>
      <TextField
        sx={{ width: '60%' }}
        margin="dense"
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
      {isLoading && <LinearProgress sx={{ width: '59%', height: '5px', margin: '0 0.5%' }} />}
    </Grid>
  );
}

export default QuestionSearch;
