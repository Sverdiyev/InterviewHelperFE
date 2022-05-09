import Cookies from 'js-cookie';
import { requestData } from './http-client.js';

const inOneHour = () => new Date(new Date().getTime() + 60 * 60 * 1000);

export const loginRequest = async (userCredentials) => {
  const res = await requestData('/user/authenticate', 'POST', userCredentials);
  if (res.ok) {
    const data = await res.json();

    const user = { firstName: data.name, lastName: 'Verdiyev' };

    Cookies.set('jwt', data.token, { expires: inOneHour() });
    Cookies.set('user', JSON.stringify(user), { expires: inOneHour() });

    return user;
  }
  return false;
  //! TO DO - add lastName to BE
};

export const logOutRequest = () => {
  Cookies.remove('user');
  Cookies.remove('jwt');
};

export const addUserRequest = async ({ name, email, password }) => {
  //! add lastName support for BE
  const res = await requestData('/user/add', 'POST', { name, email, password });
  if (res.ok) {
    const data = await res.json();
    const user = { firstName: data.name, lastName: 'Verdiyev' };

    Cookies.set('jwt', data.token, { expires: inOneHour() });
    Cookies.set('user', JSON.stringify(user), { expires: inOneHour() });

    return user;
  }
  return false;
};
