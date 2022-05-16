import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Search as SearchIcon, Clear as ClearIcon } from '@mui/icons-material';

function BasicSearch({ setSearchValue, searchValue, searchHandler, clearHandler }) {
  return (
    <TextField
      fullWidth
      size="small"
      margin="normal"
      id="search"
      variant="outlined"
      placeholder="Search"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      onKeyPress={(e) => {
        if (e.key === 'Enter') searchHandler();
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: searchValue && (
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
