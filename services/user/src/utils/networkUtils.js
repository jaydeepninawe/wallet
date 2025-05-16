const axios = require("axios");

exports.sendToPlatform = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    throw new Error("Network error: " + error.message);
  }
};