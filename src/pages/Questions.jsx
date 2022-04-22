import { CircularProgress, Grid } from '@mui/material';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import AddQuestionPopup from '../components/AddQuestion/AddQuestionPopup.jsx';
import FloatingAddQuestions from '../components/AddQuestion/FloatingAddQuestions.jsx';
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
      <AddQuestionPopup />
      <Search setSearchValue={setSearchValue} />
      {isLoading && (
        <Grid container alignItems="center" flexGrow="1" sx={{ paddingBottom: '5%', width: '15%' }}>
          <CircularProgress size="30%" />
        </Grid>
      )}
      {error && <div>error</div>}
      {isSuccess && data.map((question) => <Question key={question.Id} {...question} />)}
      {isSuccess && data.length === 0 && <div>No Questions Found</div>}
      <FloatingAddQuestions />
    </>
  );
}

export default Questions;
