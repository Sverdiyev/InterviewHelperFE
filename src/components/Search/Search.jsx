import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  TextField
} from '@mui/material';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search as SearchIcon, Clear as ClearIcon } from '@mui/icons-material';
import MultipleSelectField from '../StyledUI/MultipleSelectField.jsx';

function Search() {
  const [advSearchIsOpen, setAdvSearchIsOpen] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const [searchValue, setSearchValue] = useState(searchParams.get('search') || '');
  const [tagsValue, setTagsValue] = useState(searchParams.getAll('tag') || []);
  const [complexityValue, setComplexityValue] = useState(searchParams.getAll('complexity') || []);
  const [hardToGoogle, setHardToGoogle] = useState(searchParams.get('hardToGoogle') || false);

  const searchHandler = () => {
    const searchQuery = {};
    if (tagsValue.length > 0) searchQuery.tag = tagsValue;
    if (complexityValue.length > 0) searchQuery.complexity = complexityValue;
    if (hardToGoogle) searchQuery.hardToGoogle = hardToGoogle;

    console.log('🚀 ~ searchHandler ~ searchQuery', searchQuery);
    setSearchParams({ search: searchValue, ...searchQuery });
  };

  const clearHandler = () => {
    setSearchValue('');
    setSearchParams({});
  };

  //adv

  //get all tags
  const allTags = ['tag1', 'tag2', 'tag3', 'tag4'];

  return (
    <Grid container sx={{ width: '60%', mb: 1 }} alignItems="center">
      <Grid item xs={9}>
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
      </Grid>
      <Grid item xs={3} sx={{ pt: 1 }}>
        <Button variant="outlined" onClick={() => setAdvSearchIsOpen((prevState) => !prevState)}>
          Advanced Search
        </Button>
      </Grid>
      {advSearchIsOpen && (
        <Grid item xs={12} container alignItems="center" spacing={2} justifyContent="space-between">
          <Grid item xs={4}>
            <MultipleSelectField
              values={tagsValue}
              setValue={setTagsValue}
              label="Tags"
              options={allTags}
            />
          </Grid>
          <Grid item xs={4}>
            <MultipleSelectField
              values={complexityValue}
              setValue={setComplexityValue}
              label="Complexity"
              options={['easy', 'medium', 'hard']}
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={<Checkbox onChange={(e) => setHardToGoogle(e.target.checked)} />}
              label="Hard to google"
            />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default Search;
