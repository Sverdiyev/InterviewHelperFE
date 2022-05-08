import { getEndpoint, requestData } from './http-client.js';

//get all questions
export const useQuestions = (query) => {
  const url = `/questions${query ? '?search=' + query : ''}  `;
  return getEndpoint(url);
};

//post new question
export const postQuestion = async (question) => requestData('/questions', 'POST', question);

//put - edit question
export const putQuestion = async (question) => requestData('/questions', 'PUT', question);
