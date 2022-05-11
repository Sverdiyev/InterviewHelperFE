import { CircularProgress, Grid } from '@mui/material';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import AddQuestionPopup from '../components/AddQuestion/AddQuestionPopup.jsx';
import FloatingAddQuestions from '../components/AddQuestion/FloatingAddQuestions.jsx';
import Question from '../components/Question/Question.jsx';
import Search from '../components/Search/Search.jsx';
import { useQuestions } from '../services/api-requests/questions.js';
import { decodeQueryParams } from '../services/helpers.js';

function Questions() {
  const [searchParams] = useSearchParams();

  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const [searchValues, setSearchValues] = useState(decodeQueryParams(searchParams) || {});

  const { data, error, isSuccess, isLoading } = useQuestions(searchValues);

  return (
    <>
      <AddQuestionPopup popupIsVisible={popupIsVisible} setPopupIsVisible={setPopupIsVisible} />
      <Search searchValues={searchValues} setSearchValues={setSearchValues} />
      {isLoading && (
        <Grid container alignItems="center" flexGrow="1" sx={{ paddingBottom: '5%', width: '15%' }}>
          <CircularProgress size="30%" />
        </Grid>
      )}
      <div style={{ width: '60%' }}>
        {error && <div>error</div>}
        {isSuccess && data.map((question) => <Question key={question.id} {...question} />)}
        {isSuccess && data.length === 0 && <div>No Questions Found</div>}
      </div>
      <FloatingAddQuestions setPopupIsVisible={setPopupIsVisible} />
    </>
  );
}

export default Questions;
