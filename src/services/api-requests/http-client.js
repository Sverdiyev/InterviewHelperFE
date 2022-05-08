import { useQuery } from 'react-query';
import Cookies from 'js-cookie';

const baseUrl = 'https://localhost:3001';

// generic get request
export const getEndpoint = (endpoint) => {
  const url = baseUrl + endpoint;

  return useQuery(endpoint, async () => {
    const data = await (
      await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + Cookies.get('jwt')
        }
      })
    ).json();
    return data;
  });
};

//generic post request
export const requestData = async (endpoint, httpMethod, inputData) => {
  const url = baseUrl + endpoint;

  const res = await fetch(url, {
    method: httpMethod,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Cookies.get('jwt')
    },
    body: JSON.stringify(inputData)
  });
  return res;
};
