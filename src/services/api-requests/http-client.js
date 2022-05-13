import { useQuery } from 'react-query';
import Cookies from 'js-cookie';

const baseUrl = 'https://localhost:3001';

// generic get request
export const getEndpoint = (endpoint, dataIdentifier) => {
  const url = baseUrl + endpoint;

  return useQuery(dataIdentifier, async () => {
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
  handleErrors(res);
  return res;
};

// error handler
function handleErrors(res) {
  if (!res.ok) {
    throw Error(res.statusText);
  }
}
