import React, { useState } from 'react';
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { Clear as ClearIcon } from '@mui/icons-material';
import filterQuestions from './search.js';

function QuestionSearch({ questions, setFilteredQuestions }) {
  const [inputValue, setInputValue] = useState('');

  const searchHandler = () => {
    const filtered = filterQuestions(questions, inputValue);
    setFilteredQuestions(filtered);
  };

  const clearHandler = () => {
    setInputValue('');
    setFilteredQuestions(questions);
  };

  return (
    <Grid container sx={{ width: '60%', margin: '1rem 0', position: 'absolute', top: 0 }}>
      <TextField
        sx={{ width: '60%' }}
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
    </Grid>
  );
}

export default QuestionSearch;
