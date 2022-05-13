import { useQuery } from 'react-query';

const baseUrl = 'https://localhost:3001';

const tmpAuthToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhc2hhQGdtYWlsLmNvbSIsImV4cCI6MTY1MjQwNjE0M30.jSDjPHqVhs_7YFYzpNQYwu_eEkyQG4AQYnxyrRvm0TY';

export const useEndpoint = (endpoint, dataIdentifier, method = 'GET', inputData = null) => {
  const url = baseUrl + endpoint;

  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + tmpAuthToken
    }
  };

  return useQuery([dataIdentifier, inputData], async () => {
    if (inputData) options.body = JSON.stringify(inputData);
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
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + tmpAuthToken
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
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + tmpAuthToken
    },
    body: JSON.stringify(inputData)
  });
  return res.ok;
};
