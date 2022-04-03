import React from 'react';
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

function QuestionSearch() {
  // { questions, onFilter }
  return (
    <Grid container sx={{ width: '60%', margin: '1rem 0' }}>
      <TextField
        sx={{ width: '51%' }}
        margin="dense"
        id="search"
        variant="outlined"
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
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
          )
        }}
      />
    </Grid>
  );
}

export default QuestionSearch;
