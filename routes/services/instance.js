const axios = require('axios');
const instance = axios.create({
  baseURL: process.env.IDENTITY_URL,
  timeout: 20000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

instance.interceptors.response.use((response) => {
  return response;
}, function (error) {
  if (error.response.status === 401) {
    return Promise.reject(error.response.data);
  }

  if (error.response.status === 400) {
    return Promise.reject(error.response.data);
  }
});

module.exports = instance;