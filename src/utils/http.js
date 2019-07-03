import axios from 'axios';
import CONFIG from '../config';

const http = axios.create({
  baseURL: CONFIG.baseUrl,
  headers: {},
});

export default http;
