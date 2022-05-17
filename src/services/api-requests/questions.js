import { useEndpoint, requestData } from './http-client.js';

//get all questions
export const useQuestions = (searchParams) => {
  const url = `/questions`;
  return useEndpoint(url, 'questionsFetch', 'POST', searchParams);
};

export const useQuestionTags = () => {
  const url = `/questions/tags`;
  return useEndpoint(url, 'tagsFetch');
};

//post new question
export const postQuestion = async (question) => requestData('/questions/add', 'POST', question);

//put - edit question
export const putQuestion = async (question) => requestData('/questions/edit', 'PUT', question);

// delete - delete question
export const deleteQuestion = async (questionId) =>
  requestData(`/questions/${questionId}`, 'DELETE', null);

//post user vote
export const postVote = async (userVote, voteType) =>
  requestData(`/questions/votes/${voteType}`, 'POST', userVote);

//delete user vote
export const deleteVote = async (userQuestion) =>
  requestData('/questions/votes', 'DELETE', userQuestion);
