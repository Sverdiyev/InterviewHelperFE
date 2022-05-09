import { CircularProgress, Grid } from '@mui/material';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import AddQuestionPopup from '../components/AddQuestion/AddQuestionPopup.jsx';
import FloatingAddQuestions from '../components/AddQuestion/FloatingAddQuestions.jsx';
import Question from '../components/Question/Question.jsx';
import Search from '../components/Search/Search.jsx';
import { useQuestions } from '../services/api-requests/questions.js';

function Questions() {
  const [searchParams] = useSearchParams();
  const allSearchValues = {};
  searchParams.forEach((value, key) => {
    let tmp;

    switch (key) {
      case 'complexity':
      case 'tags':
        tmp = value.split(',');
        break;
      case 'questionRating':
        tmp = value.split(',').map((number) => +number);
        break;
      case 'favorite':
      case 'hardToGoogle':
        tmp = tmp !== null && value === 'true';
        break;
      default:
        tmp = value;
    }

    if (tmp !== null || tmp !== '') allSearchValues[key] = tmp;
  });

  const { data, error, isSuccess, isLoading } = useQuestions(allSearchValues);

  const [popupIsVisible, setPopupIsVisible] = useState(false);

  return (
    <>
      <AddQuestionPopup popupIsVisible={popupIsVisible} setPopupIsVisible={setPopupIsVisible} />
      {/*Key below is provided so the search component rerenders 
      when clicking on Question or Home NavLink.
      Without this key the state does not rerender.*/}
      <Search key={JSON.stringify(allSearchValues)} />
      {isLoading && (
        <Grid container alignItems="center" flexGrow="1" sx={{ paddingBottom: '5%', width: '15%' }}>
          <CircularProgress size="30%" />
        </Grid>
      )}
      {error && <div>error</div>}
      {isSuccess && data.map((question) => <Question key={question.id} {...question} />)}
      {isSuccess && data.length === 0 && <div>No Questions Found</div>}
      <FloatingAddQuestions setPopupIsVisible={setPopupIsVisible} />
    </>
  );
}

export default Questions;
