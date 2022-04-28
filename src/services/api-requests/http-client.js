import { useQuery } from 'react-query';

const baseUrl = 'https://localhost:3001';

// generic get request
export const getEndpoint = (endpoint) => {
  const url = baseUrl + endpoint;

  return useQuery(endpoint, async () => {
    const data = await (await fetch(url)).json();
    return data;
  });
};

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
