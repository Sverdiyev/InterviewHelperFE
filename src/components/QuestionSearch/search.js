export const filterByQuestion = (questions, input) => {
  return questions.filter((question) => question.QuestionContent.includes(input));
};

const filterByNote = () => {};

const filterByTag = () => {};

const filterByDifficulty = () => {};

const filterQuestions = (questions, input) => {};

export default filterQuestions;
