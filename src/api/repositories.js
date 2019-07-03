import http from '../utils/http';

export const fetchList = ({ q, sort }) =>
  http.get(`/search/repositories?q=${q}&sort=${sort}`);
