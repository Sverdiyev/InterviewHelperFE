import { useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Search as SearchIcon, Clear as ClearIcon } from '@mui/icons-material';
import { useSearchParams } from 'react-router-dom';

function BasicSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get('search') || '');
  const searchHandler = () => setSearchParams({ search: inputValue });

  const clearHandler = () => {
    setInputValue('');
    setSearchParams({});
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
