import axios from 'axios';

export const postToService = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.error(`Error posting to ${url}:`, error.message);
    throw error;
  }
};
