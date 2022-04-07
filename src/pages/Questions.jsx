import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Question from '../components/Question/Question.jsx';
import Search from '../components/Search.jsx';
import { useQuestions } from '../services/api-requests/questions.js';

function Questions() {
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get('search');
  const { data, error, isSuccess, isLoading } = useQuestions(searchValue);

  const navigate = useNavigate();

  const setSearchValue = (value) =>
    navigate({ pathname: '/questions', search: `${value ? '?search=' + value : ''}` });
  return (
    <>
      <Search setSearchValue={setSearchValue} />
      {isLoading && <div>Loading</div>}
      {error && <div>error</div>}
      {isSuccess && data.map((question) => <Question key={question.Id} {...question} />)}
      {isSuccess && data.length === 0 && <div>No Questions Found</div>}
    </>
  );
}

export default Questions;
