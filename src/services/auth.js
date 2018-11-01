import { TOKEN_KEY } from '../settings';

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const isAuth = () => getToken() !== null;

export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logoff = () => {
  localStorage.removeItem(TOKEN_KEY);
};
