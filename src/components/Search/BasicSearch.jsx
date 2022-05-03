import { useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Search as SearchIcon, Clear as ClearIcon } from '@mui/icons-material';

function BasicSearch({ setSearchValue }) {
  const [inputValue, setInputValue] = useState('');
  const searchHandler = () => setSearchValue({ search: inputValue });

  const clearHandler = () => {
    setInputValue('');
    setSearchValue('');
  };

  return (
    <TextField
      fullWidth
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
  );
}

export default BasicSearch;
