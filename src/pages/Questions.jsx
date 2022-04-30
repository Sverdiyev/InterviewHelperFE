import { CircularProgress, Grid } from '@mui/material';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Question from '../components/Question/Question.jsx';
import Search from '../components/Search.jsx';
import { useQuestions } from '../services/api-requests/questions.js';

function Questions() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('search');
  const { data, error, isSuccess, isLoading } = useQuestions(searchValue);

  const setSearchValue = (value) => setSearchParams({ search: value });

  return (
    <>
      <Search setSearchValue={setSearchValue} />
      {isLoading && (
        <Grid container alignItems="center" flexGrow="1" sx={{ paddingBottom: '5%', width: '15%' }}>
          <CircularProgress size="30%" />
        </Grid>
      )}

      {error && <div>error</div>}
      {isSuccess && data.map((question) => <Question key={question.id} {...question} />)}
      {isSuccess && data.length === 0 && <div>No Questions Found</div>}
    </>
  );
}

export default Questions;
