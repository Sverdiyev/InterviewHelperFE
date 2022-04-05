import React from 'react';
import Question from '../components/Question/Question.jsx';
import { useGetQuestions } from '../services/api-requests/questions.js';

function Questions() {
  const { data, error, isSuccess, isLoading } = useGetQuestions();

  return (
    <>
      {isLoading && <div>Loading</div>}
      {error && <div>error</div>}
      {isSuccess && data.map((question) => <Question key={question.Id} {...question} />)}
    </>
  );
}

export default Questions;
