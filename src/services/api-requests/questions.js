import { getEndpoint, postData } from '../http-client.js';

//my mock api url. The data is not filled in properly, so the UI will look slightly weird

//get all questions
export const useGetQuestions = () => getEndpoint('/questions');

//post new question
export const postQuestion = async (question) => postData('/questions', question);
