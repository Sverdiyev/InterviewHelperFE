import React from 'react';
import Question from '../components/Question.jsx';

const questions = [
  {
    Id: 1,
    Complexity: 'easy',
    QuestionContent: 'asd',
    Note: 'asdqwe',
    Vote: 5,
    Tags: ['tag 1', 'tag 2']
  }
];

function Questions() {
  return (
    <>
      {questions.map((question) => (
        <Question key={question.Id} {...question} />
      ))}
    </>
  );
}

export default Questions;
