import React, { useState } from 'react';
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { Clear as ClearIcon } from '@mui/icons-material';
import { filterByQuestion } from './search.js';

function QuestionSearch({ questions }) {
  const [inputValue, setInputValue] = useState('');

  const searchHandler = () => {
    const filtered = filterByQuestion(questions, inputValue);
    console.log('🚀 ~ searchHandler ~ filtered', filtered);
  };

  const clearHandler = () => {
    setInputValue('');
  };

  return (
    <Grid container sx={{ width: '60%', margin: '1rem 0' }}>
      <TextField
        sx={{ width: '51%' }}
        margin="dense"
        id="search"
        variant="outlined"
        placeholder="Search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick={searchHandler}>
                <SearchIcon />
              </IconButton>
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
      <TextField
        sx={{ width: '51%' }}
        margin="dense"
        id="search"
        label="Search"
        variant="outlined"
        placeholder="Question, complexity or tag"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
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

export default QuestionSearch;
