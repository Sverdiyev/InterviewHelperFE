import { getEndpoint, requestData } from './http-client.js';

//get all questions
export const useQuestions = (query) => {
  const url = `/questions${query ? '?search=' + query : ''}  `;
  return getEndpoint(url, 'questions');
};

//post new question
export const postQuestion = async (question) => requestData('/questions', 'POST', question);

//put - edit question
export const putQuestion = async (question) => requestData('/questions', 'PUT', question);

//post user vote
export const postVote = async (userVote, voteType) =>
  requestData(`/questions/votes/${voteType}`, 'POST', userVote);

//delete user vote
export const deleteVote = async (userQuestion) =>
  requestData('/questions/votes', 'DELETE', userQuestion);
