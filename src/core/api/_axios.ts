import axios from 'axios';

export const _axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
