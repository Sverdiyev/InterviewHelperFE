import { useQuery } from 'react-query';

//my mock api url. The data is not filled in properly, so the UI will look slightly weird
const baseUrl = 'https://6249c785fd7e30c51c0668f4.mockapi.io/';

// generic get request
export const getEndpoint = (endpoint) => {
  const url = baseUrl + endpoint;

  return useQuery(
    endpoint,
    async () => {
      const data = await (await fetch(url)).json();
      return data;
    },
    {
      notifyOnChangeProps: ['data', 'error']
    }
  );
};

//get all questions
export const getQuestions = () => getEndpoint('/questions');

//generic post request
export const postData = async (endpoint, inputData) => {
  const url = baseUrl + endpoint;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(inputData)
  });

  const data = await response.json();
  return data;
};

//post new question
export const postQuestion = async (question) => postData('/questions', question);
