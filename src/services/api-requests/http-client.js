import { useQuery } from 'react-query';
import { token } from './token';

const baseUrl = 'https://localhost:3001';

// generic get request
export const getEndpoint = (endpoint, dataIdentifier) => {
  const url = baseUrl + endpoint;

  return useQuery(dataIdentifier, async () => {
    const response = await fetch(url, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    handleErrors(response);
    return response.json();
  });
};

//generic post request
export const postData = async (endpoint, inputData) => {
  const url = baseUrl + endpoint;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    },
    body: JSON.stringify(inputData)
  });
  handleErrors(response);
  return response.ok;
};

//generic put request
export const putData = async (endpoint, inputData) => {
  const url = baseUrl + endpoint;

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    },
    body: JSON.stringify(inputData)
  });

  handleErrors(response);
  return response.ok;
};

//generic delete request
export const deleteData = async (endpoint, inputData) => {
  const url = baseUrl + endpoint;

  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    },
    body: JSON.stringify(inputData)
  });
  handleErrors(response);
  return response.ok;
};

// error handler
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
}
