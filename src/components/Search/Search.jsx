import { Button, Grid } from '@mui/material';
import { useContext, useState } from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import BasicSearch from './BasicSearch.jsx';
import AdvancedSearch from './AdvancedSearch.jsx';
import { filterUnneededValues, setSearchParamsHandler } from '../../services/helpers.js';
import { useSearchParams } from 'react-router-dom';
import { useQuestionTags } from '../../services/api-requests/questions.js';
import CartContext from '../../store/cart-context.js';
import { DARK_GREEN, GREEN } from '../../App.jsx';

const MAX_QUESTION_RATING = 100;
const MIN_QUESTION_RATING = -30;

function Search({ searchValues, setSearchValues, setSectionOpen }) {
  const cartCtx = useContext(CartContext);

  const { data, isSuccess } = useQuestionTags();
  const allTags = isSuccess ? data : ['Tags are loading'];

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

    if (cartCtx.cartIsOpen) cartCtx.toggleCart();
    setSearchValues(filteredNewSearchValues);
    setSectionOpen(false);
  };
  const clearHandler = () => {
    setSearchValue('');
    setTagsValue([]);
    setComplexityValue([]);
    setHardToGoogleValue(false);
    setQuestionRatingValue([MIN_QUESTION_RATING, MAX_QUESTION_RATING]);
    setFavoriteValue(false);

    if (cartCtx.cartIsOpen) cartCtx.toggleCart();
    setSearchParams({});
    setSearchValues({});
    setSectionOpen(false);
  };

  return (
    <Grid container sx={{ mb: 1 }} alignItems="center" justifyContent="space-between">
      <Grid item xs={8}>
        <BasicSearch
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          searchHandler={searchHandler}
          clearHandler={clearHandler}
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          sx={{
            borderColor: GREEN,
            color: GREEN,
            [':hover']: {
              borderColor: DARK_GREEN,
              color: DARK_GREEN
            }
          }}
          variant="outlined"
          startIcon={<SearchIcon />}
          onClick={searchHandler}>
          Search
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Button
          sx={{
            borderColor: GREEN,
            color: GREEN,
            [':hover']: {
              borderColor: DARK_GREEN,
              color: DARK_GREEN
            }
          }}
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
          clearHandler={clearHandler}
        />
      )}
    </Grid>
  );
}

export default Search;
