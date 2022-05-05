import { getEndpoint, postData, putData, deleteData } from './http-client.js';

//get all questions
export const useQuestions = (query) => {
  const url = `/questions${query ? '?search=' + query : ''}  `;
  return getEndpoint(url, 'questions');
};

//post new question
export const postQuestion = async (question) => postData('/questions', question);

//put - edit question
export const putQuestion = async (question) => putData('/questions', question);

//post user vote
export const postUpVote = async (userQuestion) => postData('/questions/votes/upvote', userQuestion);

//post user dwon vote
export const postDownVote = async (userQuestion) =>
  postData('/questions/votes/downvote', userQuestion);

//delete user vote
export const deleteVote = async (userQuestion) => deleteData('/questions/votes', userQuestion);
