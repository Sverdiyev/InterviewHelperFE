import { getEndpoint, postData } from './http-client.js';

//get all questions
export const useGetQuestions = () => getEndpoint('/questions');

//post new question
export const postQuestion = async (question) => postData('/questions', question);
