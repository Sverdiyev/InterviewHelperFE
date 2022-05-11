import { Button, Grid } from '@mui/material';
import { useState } from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import BasicSearch from './BasicSearch.jsx';
import AdvancedSearch from './AdvancedSearch.jsx';
import { filterUnneededValues, setSearchParamsHandler } from '../../services/helpers.js';
import { useSearchParams } from 'react-router-dom';

function Search({ searchValues, setSearchValues }) {
  const [, setSearchParams] = useSearchParams();

  const [advSearchIsOpen, setAdvSearchIsOpen] = useState(false);

  const [searchValue, setSearchValue] = useState(searchValues.search || '');
  const [tagsValue, setTagsValue] = useState(searchValues.tags || []);
  const [complexityValue, setComplexityValue] = useState(searchValues.complexity || []);
  const [hardToGoogle, setHardToGoogle] = useState(searchValues.hardToGoogle || false);
  const [favoriteValue, setFavorite] = useState(searchValues.favorite || false);
  const [questionRating, setQuestionRating] = useState(searchValues.questionRating || [-30, 100]);

  const searchHandler = () => {
    const newSearchValues = {
      search: searchValue,
      tags: tagsValue,
      complexity: complexityValue,
      hardToGoogle,
      favorite: favoriteValue,
      questionRating
    };

    const filteredNewSearchValues = filterUnneededValues(newSearchValues);
    setSearchParamsHandler(setSearchParams, filteredNewSearchValues);

    setSearchValues(filteredNewSearchValues);
  };
  const clearHandler = () => {
    setSearchValue('');
    setTagsValue([]);
    setComplexityValue([]);
    setHardToGoogle('');
    setQuestionRating([-30, 100]);

    setSearchParams({});

    const newSearchValues = setSearchParams(setSearchParams, {});
    setSearchValues(newSearchValues);
  };

  //fetch all tags from BE
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
          hardToGoogleValue={hardToGoogle}
          questionRating={questionRating}
          setQuestionRating={setQuestionRating}
          setFavorite={setFavorite}
          favoriteValue={favoriteValue}
        />
      )}
    </Grid>
  );
}

export default Search;
