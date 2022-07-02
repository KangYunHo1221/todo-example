import axios from 'axios';

export const BASE_URL = 'http://localhost:4000';

// run server 후 사용
export const client = axios.create({
  baseURL: BASE_URL,
});
