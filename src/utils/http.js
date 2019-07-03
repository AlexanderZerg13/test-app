import axios from 'axios';
import CONFIG from '../config';

const http = axios.create({
  baseURL: CONFIG.baseUrl,
  headers: {},
});

http.init = () => {};

http.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');

    const newConfig = config;

    if (token) {
      newConfig.headers.Authorization = `Bearer ${token}`;
    }

    return newConfig;
  },
  err => Promise.reject(err),
);

export default http;
