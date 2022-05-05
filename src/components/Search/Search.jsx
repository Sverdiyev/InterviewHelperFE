import { Button, Grid } from '@mui/material';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search as SearchIcon } from '@mui/icons-material';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import BasicSearch from './BasicSearch.jsx';
import AdvancedSearch from './AdvancedSearch.jsx';

function Search() {
  const [advSearchIsOpen, setAdvSearchIsOpen] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const [searchValue, setSearchValue] = useState(searchParams.get('search') || '');
  const [tagsValue, setTagsValue] = useState(searchParams.getAll('tag') || []);
  const [complexityValue, setComplexityValue] = useState(searchParams.getAll('complexity') || []);
  const [hardToGoogle, setHardToGoogle] = useState(searchParams.get('hardToGoogle') || false);

  const searchHandler = () => {
    const searchQuery = {};
    if (tagsValue.length > 0) searchQuery.tag = tagsValue.join(',');
    if (complexityValue.length > 0) searchQuery.complexity = complexityValue.join(',');
    if (hardToGoogle) searchQuery.hardToGoogle = hardToGoogle;

    setSearchParams({ search: searchValue, ...searchQuery });
  };

  const clearHandler = () => {
    setSearchValue('');
    setTagsValue([]);
    setComplexityValue([]);
    setHardToGoogle('');
    setSearchParams({});
  };

  //get all tags
  const allTags = ['tag1', 'tag2', 'tag3', 'tag4'];

  return (
    <Grid container sx={{ width: '60%', mb: 1 }} alignItems="center">
      <Grid item xs={8}>
        <BasicSearch
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          searchHandler={searchHandler}
          clearHandler={clearHandler}
        />
      </Grid>
      <Grid item xs={2} sx={{ pt: 1 }}>
        <Button variant="outlined" startIcon={<SearchIcon />} onClick={searchHandler}>
          Search
        </Button>
      </Grid>
      <Grid item xs={2} sx={{ pt: 1 }}>
        <Button
          variant="outlined"
          startIcon={<SettingsSuggestIcon />}
          onClick={() => setAdvSearchIsOpen((prevState) => !prevState)}>
          Options
        </Button>
      </Grid>
      {advSearchIsOpen && (
        <AdvancedSearch
          tagsValue={tagsValue}
          setTagsValue={setTagsValue}
          allTags={allTags}
          complexityValue={complexityValue}
          setComplexityValue={setComplexityValue}
          setHardToGoogle={setHardToGoogle}
        />
      )}
    </Grid>
  );
}

export default Search;
