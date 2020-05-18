import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://raw.githubusercontent.com/owInteractive/desafio-frontend-2020/master/',
  timeout: 5000
})