import { getEndpoint, postData, putData } from './http-client.js';

//get all questions
export const useQuestions = (searchParams) => {
  const query = new URLSearchParams(searchParams).toString();

  const url = `/questions${query ? '?' + query : ''}  `;
  return getEndpoint(url);
};

//post new question
export const postQuestion = async (question) => postData('/questions', question);

//put - edit question
export const putQuestion = async (question) => putData('/questions', question);
