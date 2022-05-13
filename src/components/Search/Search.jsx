import { Button, Grid } from '@mui/material';
import { useState } from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import BasicSearch from './BasicSearch.jsx';
import AdvancedSearch from './AdvancedSearch.jsx';
import { filterUnneededValues, setSearchParamsHandler } from '../../services/helpers.js';
import { useSearchParams } from 'react-router-dom';
import { useQuestionTags } from '../../services/api-requests/questions.js';

const MAX_QUESTION_RATING = 100;
const MIN_QUESTION_RATING = -30;

function Search({ searchValues, setSearchValues }) {
  const { data, isSuccess } = useQuestionTags();
  const allTags = isSuccess ? data.map((tag) => tag.tagName) : ['Tags are loading'];

  const [, setSearchParams] = useSearchParams();

  const [advSearchIsOpen, setAdvSearchIsOpen] = useState(false);

  const [searchValue, setSearchValue] = useState(searchValues.search || '');
  const [tagsValue, setTagsValue] = useState(searchValues.tags || []);
  const [complexityValue, setComplexityValue] = useState(searchValues.complexity || []);
  const [hardToGoogleValue, setHardToGoogleValue] = useState(searchValues.hardToGoogle || false);
  const [favoriteValue, setFavoriteValue] = useState(searchValues.favorite || false);
  const [questionRatingValue, setQuestionRatingValue] = useState(
    searchValues.questionRating || [MIN_QUESTION_RATING, MAX_QUESTION_RATING]
  );

  const searchHandler = () => {
    const newSearchValues = {
      search: searchValue,
      tags: tagsValue,
      complexity: complexityValue,
      hardToGoogle: hardToGoogleValue,
      favorite: favoriteValue,
      questionRating: questionRatingValue
    };

    const filteredNewSearchValues = filterUnneededValues(newSearchValues);
    setSearchParamsHandler(setSearchParams, filteredNewSearchValues);

    setSearchValues(filteredNewSearchValues);
  };
  const clearHandler = () => {
    setSearchValue('');
    setTagsValue([]);
    setComplexityValue([]);
    setHardToGoogleValue(false);
    setQuestionRatingValue([MIN_QUESTION_RATING, MAX_QUESTION_RATING]);
    setFavoriteValue(false);

    setSearchParams({});
    setSearchValues({});
  };

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
          setHardToGoogle={setHardToGoogleValue}
          hardToGoogleValue={hardToGoogleValue}
          questionRating={questionRatingValue}
          setQuestionRating={setQuestionRatingValue}
          setFavorite={setFavoriteValue}
          favoriteValue={favoriteValue}
        />
      )}
    </Grid>
  );
}

export default Search;
