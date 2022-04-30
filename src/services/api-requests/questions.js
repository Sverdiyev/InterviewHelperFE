import { getEndpoint, postData } from './http-client.js';

//get all questions
export const useQuestions = (query) => {
  const url = `InterviewQuestions${query ? '?search=' + query : ''}  `;
  return getEndpoint(url);
};

//post new question
export const postQuestion = async (question) => postData('/questions', question);
