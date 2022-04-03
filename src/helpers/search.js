const filterByQuestion = (questions, input) => {
  const filteredQuestions = questions.filter((question) =>
    question.QuestionContent.toLowerCase().includes(input)
  );
  const filteredIDs = filteredQuestions.map((question) => question.Id);
  return filteredIDs;
};

const filterByNote = (questions, input) => {
  const filteredQuestions = questions.filter((question) => {
    return question?.Note?.toLowerCase().includes(input);
  });
  const filteredIDs = filteredQuestions.map((question) => question.Id);
  return filteredIDs;
};

const filterByTag = (questions, input) => {
  const filteredQuestions = questions.filter((question) =>
    question.Tags.some((el) => el.includes(input))
  );
  const filteredIDs = filteredQuestions.map((question) => question.Id);

  return filteredIDs;
};

const filterByComplexity = (questions, input) => {
  const filteredQuestions = questions.filter((question) =>
    question.Complexity.toLowerCase().includes(input)
  );
  const filteredIDs = filteredQuestions.map((question) => question.Id);
  return filteredIDs;
};

const filterQuestions = (questions, input) => {
  const trimmedInput = input.trim().toLowerCase();
  if (trimmedInput === '') return questions;

  let filteredIDs = [];
  filteredIDs.push(...filterByComplexity(questions, trimmedInput));
  filteredIDs.push(...filterByQuestion(questions, trimmedInput));
  filteredIDs.push(...filterByNote(questions, trimmedInput));
  filteredIDs.push(...filterByTag(questions, trimmedInput));
  const filteredIDsSet = new Set(filteredIDs);
  filteredIDs = [...filteredIDsSet];

  let result = [];
  for (let filteredId of filteredIDs) {
    result.push(
      ...questions.filter((question) => {
        return question.Id === filteredId;
      })
    );
  }
  return result;
};

export default filterQuestions;
