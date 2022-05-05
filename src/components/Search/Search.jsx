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

  const searchParam = searchParams.get('search');
  const tagsParam = searchParams.get('tags')?.split(',');
  const complexityParam = searchParams.get('complexity')?.split(',');
  const hardToGoogleParam = searchParams.get('hardToGoogle');
  const questionRatingParam = searchParams.get('questionRating')?.split(',');

  const [searchValue, setSearchValue] = useState(searchParam || '');
  const [tagsValue, setTagsValue] = useState(tagsParam || []);
  const [complexityValue, setComplexityValue] = useState(complexityParam || []);
  const [hardToGoogle, setHardToGoogle] = useState(hardToGoogleParam || false);

  const [questionRating, setQuestionRating] = useState(questionRatingParam || [-30, 100]);

  const searchHandler = () => {
    const searchQuery = {};
    if (tagsValue.length > 0) searchQuery.tags = tagsValue.join(',');
    if (complexityValue.length > 0) searchQuery.complexity = complexityValue.join(',');
    if (hardToGoogle) searchQuery.hardToGoogle = hardToGoogle;
    if (questionRating.length === 2) searchQuery.questionRating = questionRating.join(',');

    setSearchParams({ search: searchValue, ...searchQuery });
  };

  const clearHandler = () => {
    setSearchValue('');
    setTagsValue([]);
    setComplexityValue([]);
    setHardToGoogle('');
    setSearchParams({});
    setQuestionRating([-30, 100]);
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
          questionRating={questionRating}
          setQuestionRating={setQuestionRating}
        />
      )}
    </Grid>
  );
}

export default Search;
