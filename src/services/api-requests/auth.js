import Cookies from 'js-cookie';
import { requestData } from './http-client.js';

const inOneHour = () => new Date(new Date().getTime() + 60 * 60 * 1000);

export const loginRequest = async (userCredentials) => {
  const res = await requestData('/user/authenticate', 'POST', userCredentials);
  if (res.ok) {
    const data = await res.json();

    const user = data.name;

    Cookies.set('jwt', data.token, { expires: inOneHour() });
    Cookies.set('user', user, { expires: inOneHour() });

    return user;
  }
  return false;
};

export const logOutRequest = () => {
  Cookies.remove('user');
  Cookies.remove('jwt');
};

export const addUserRequest = async ({ name, email, password }) => {
  const res = await requestData('/user/add', 'POST', { name, email, password });
  if (res.ok) {
    const data = await res.json();
    const user = data.name;

    Cookies.set('jwt', data.token, { expires: inOneHour() });
    Cookies.set('user', user, { expires: inOneHour() });

    return user;
  }
  return false;
};
