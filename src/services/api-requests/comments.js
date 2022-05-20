import { useEndpoint, requestData } from './http-client.js';

//get all question comments
export const useComments = (questionId) => {
  const url = `/comments/${questionId}`;
  return useEndpoint(url, `${questionId}-comments`, 'GET');
};

// post comment
export const postComment = async (comment) => requestData('/comments/add', 'POST', comment);

// delete comment
export const deleteComment = async (commentId) =>
  requestData(`/comments/${commentId}`, 'DELETE', null);

// edit comment
export const editComment = async (comment) => requestData('/comments/edit', 'PUT', comment);
