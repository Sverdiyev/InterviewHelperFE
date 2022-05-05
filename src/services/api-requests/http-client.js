import { useQuery } from 'react-query';
import { autheticate } from './token';

const baseUrl = 'https://localhost:3001';

// generic get request
export const getEndpoint = (endpoint, dataIdentifier) => {
  const url = baseUrl + endpoint;

  return useQuery(dataIdentifier, async () => {
    const data = await fetch(url, {
      headers: {
        Authorization: 'Bearer ' + (await autheticate({ email: 'test@test', password: 'test' }))
      }
    });
    return data.json();
  });
};

//generic post request
export const postData = async (endpoint, inputData) => {
  const url = baseUrl + endpoint;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + (await autheticate({ email: 'test@test', password: 'test' }))
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
      Authorization: 'Bearer ' + (await autheticate({ email: 'test@test', password: 'test' }))
    },
    body: JSON.stringify(inputData)
  });
  return res.ok;
};

//generic delete request
export const deleteData = async (endpoint, inputData) => {
  const url = baseUrl + endpoint;

  const res = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + (await autheticate({ email: 'test@test', password: 'test' }))
    },
    body: JSON.stringify(inputData)
  });
  return res.ok;
};
