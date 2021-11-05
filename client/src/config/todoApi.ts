import axios from 'axios';

export const todoApi = axios.create({
  baseURL: 'http://localhost:4000',
});
