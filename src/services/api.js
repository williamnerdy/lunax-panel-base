import axios from 'axios';
import { API_URL } from '../settings';
import { getToken } from './auth';

const api = axios.create({
  baseURL: API_URL
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default api;
