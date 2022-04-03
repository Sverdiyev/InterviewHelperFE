import React, { useState } from 'react';
import Question from '../components/Question/Question.jsx';
import QuestionSearch from '../components/QuestionSearch/QuestionSearch.jsx';

const questions = [
  {
    Id: 1,
    Complexity: 'Easy',
    QuestionContent:
      'Dignissimos libero quo dolorum velit reprehenderit debitis laudantium, vero ipsum.',
    Note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore dolor voluptatem minus voluptatibus quisquam esse aliquid harum sed quia facere. ',
    Vote: 5,
    Tags: ['tag 1', 'tag 2']
  },
  {
    Id: 2,
    Complexity: 'medium',
    QuestionContent: 'Lorem ipsum dolor sit amet.',
    Note: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, laborum. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur harum possimus esse quidem quasi magnam.',
    Vote: 5,
    Tags: ['tag 1', 'tag 2', 'Longer Tag', 'shrt']
  },
  {
    Id: 3,
    Complexity: 'hard',
    QuestionContent:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatum debitis eius, quibusdam saepe iusto.',
    Vote: 5,
    Tags: ['tag 1', 'tag 2']
  }
];

function Questions() {
  const [filteredQuestions, setFilteredQuestions] = useState(questions);

  return (
    <>
      <QuestionSearch questions={questions} onFilter={setFilteredQuestions} />
      {filteredQuestions.map((question) => (
        <Question key={question.Id} {...question} />
      ))}
    </>
  );
}

export default Questions;
