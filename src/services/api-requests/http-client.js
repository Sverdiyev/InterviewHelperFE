import { useQuery } from 'react-query';
import Cookies from 'js-cookie';

const baseUrl = 'https://localhost:3001';

export const useEndpoint = (endpoint, dataIdentifier, method = 'GET', inputData = null) => {
  const url = baseUrl + endpoint;

  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Cookies.get('jwt')
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
