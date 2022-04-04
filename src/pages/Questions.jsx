import React from 'react';
import Question from '../components/Question/Question.jsx';
import { getQuestions } from '../services/api-request.js';

function Questions() {
  const { data, error, isFetching } = getQuestions();

  return (
    <>
      {isFetching && <div>Loading</div>}
      {error && <div>error</div>}
      {!isFetching &&
        !error &&
        data.map((question) => <Question key={question.Id} {...question} />)}
    </>
  );
}

export default Questions;
