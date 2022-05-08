import Cookies from 'js-cookie';
import { requestData } from './http-client.js';

export const loginRequest = async (userCredentials) => {
  const res = await requestData('/user/authenticate', 'POST', userCredentials);
  if (res.ok) {
    const data = await res.json();

    const user = { firstName: data.name, lastName: 'Verdiyev' };

    Cookies.set('jwt', data.token);
    Cookies.set('user', JSON.stringify(user));

    return user;
  }
  return false;
  //! TO DO - add lastName to BE
};

export const logOutRequest = () => {
  Cookies.remove('user');
  Cookies.remove('jwt');
};

export const addUserRequest = async ({ firstName, email, password }) => {
  //! add lastName support for BE
  const res = await requestData('/user/add', 'POST', { name: firstName, email, password });
  if (res.ok) {
    const data = await res.json();
    const user = { firstName: data.name, lastName: 'Verdiyev' };

    Cookies.set('jwt', data.token);
    Cookies.set('user', JSON.stringify(user));

    return user;
  }
  return false;
};
