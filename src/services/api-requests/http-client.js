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

export const useEndpoint = (endpoint, dataIdentifier, method = 'GET', inputData) => {
  const url = baseUrl + endpoint;

  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  if (inputData) {
    options.body = JSON.stringify(inputData);
  }

  return useQuery(dataIdentifier, async () => {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  });
};

//generic post request
export const postData = async (endpoint, inputData) => {
  const url = baseUrl + endpoint;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(inputData)
  });
  return res.ok;
};

//generic put request
export const putData = async (endpoint, inputData) => {
  const url = baseUrl + endpoint;

  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(inputData)
  });
  return res.ok;
};
