import axios from 'axios';

// Generic POST utility for calling other services
export const postToService = async (url, data) => {
  return axios.post(url, data);
};
