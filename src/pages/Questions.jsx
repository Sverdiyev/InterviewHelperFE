import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from '../components/Question/Question.jsx';
import QuestionSearch from '../components/QuestionSearch/QuestionSearch.jsx';
import { useQuestions } from '../services/api-requests/questions.js';

function Questions() {
  const { data, error, isSuccess, isLoading } = useQuestions();
  const navigate = useNavigate();
  const [filteredQuestions, setFilteredQuestions] = useState(data);

  const setSearchValue = (value) => {
    console.log('search value:', value);
    navigate({ pathname: '/questions', search: '?search=' + value });
    //get request with specifies query params -- awaiting merge of PR#12 for backend communication
    //setFilteredQuestions(data from getRequests)
  };

  return (
    <>
      <QuestionSearch setSearchValue={setSearchValue} />
      {isLoading && <div>Loading</div>}
      {error && <div>error</div>}
      {isSuccess &&
        filteredQuestions.map((question) => <Question key={question.Id} {...question} />)}
      {isSuccess && filteredQuestions.length === 0 && <div>No Questions Found</div>}
    </>
  );
}

export default Questions;
