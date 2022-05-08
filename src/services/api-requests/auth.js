import Cookies from 'js-cookie';
import { requestData } from './http-client.js';

export const loginRequest = async (userCredentials) => {
  const res = await (await requestData('/user/authenticate', 'POST', userCredentials)).json();
  const name = { firstName: res.name, lastName: 'Verdiyev' };

  Cookies.set('jwt', res.token);
  Cookies.set('user', JSON.stringify(name));

  return name;
  //! TO DO - add lastName to BE
};

export const logOutRequest = () => {
  Cookies.remove('user');
  Cookies.remove('jwt');
};

export const addUserRequest = async ({ firstName, email, password }) => {
  //! add lastName support for BE
  await requestData('/user/add', 'POST', { name: firstName, email, password });
};
