import { getEndpoint, postData, putData } from './http-client.js';

//get all questions
export const useQuestions = (searchParams) => {
  let query = '';
  for (let key in Object.keys(searchParams)) {
    query += searchParams[key] ?? `${key}=${searchParams[key]}`;
  }

  const url = `/questions${query ? '?' + query : ''}  `;
  return getEndpoint(url);
};

//post new question
export const postQuestion = async (question) => postData('/questions', question);

//put - edit question
export const putQuestion = async (question) => putData('/questions', question);
