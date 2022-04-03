import React from 'react';
import Question from '../components/Question/Question.jsx';
import { getQuestions, postQuestion } from '../services/api-request.js';

const question = {
  Id: 3,
  Complexity: 'Easy',
  QuestionContent:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatum debitis eius, quibusdam saepe iusto.',
  Vote: 5,
  Tags: ['tag 1', 'tag 2']
};

function Questions() {
  const { data, error, isFetching } = getQuestions();

  return (
    <>
      {/* Added button below just to show the POST request functionality. Should be deleted before merge  */}
      <button onClick={() => postQuestion(question)}>Post question - example</button>
      {isFetching && <div>Loading</div>}
      {error && <div>error</div>}
      {!isFetching &&
        !error &&
        data.map((question) => <Question key={question.Id} {...question} />)}
    </>
  );
}

export default Questions;
