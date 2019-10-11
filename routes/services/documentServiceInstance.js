const axios = require('axios');

const documentServiceInstance = (token) =>  axios.create({
  baseURL: process.env.DOCUMENT_SERVICE_URL,
  timeout: 20000,
  headers: {
    'Accept': 'application/json',
    'Authorization': token
  }
})

module.exports = documentServiceInstance;