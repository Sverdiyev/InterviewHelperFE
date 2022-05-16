import Cookies from 'js-cookie';
import { requestData } from './http-client.js';

const in20Minutes = () => new Date(new Date().getTime() + 20 * 60 * 1000);

export const loginRequest = async (userCredentials) => {
  try {
    const res = await requestData('/user/authenticate', 'POST', userCredentials);
    const data = await res.json();

    const user = data.name;

    Cookies.set('jwt', data.token, { expires: in20Minutes() });
    Cookies.set('user', user, { expires: in20Minutes() });

    return user;
  } catch {
    return false;
  }
};

export const logOutRequest = () => {
  Cookies.remove('user');
  Cookies.remove('jwt');
};

export const addUserRequest = async ({ name, email, password }) => {
  try {
    const res = await requestData('/user/add', 'POST', { name, email, password });

    const data = await res.json();
    const user = data.name;

    Cookies.set('jwt', data.token, { expires: in20Minutes() });
    Cookies.set('user', user, { expires: in20Minutes() });

    return user;
  } catch {
    return false;
  }
};
