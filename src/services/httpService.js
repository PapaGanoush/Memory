import axios from 'axios';

// CHANGE BASE URL
const httpService = axios.create({
  baseURL: 'https://memory-api.scapp.swisscom.com',
});

export default httpService;
