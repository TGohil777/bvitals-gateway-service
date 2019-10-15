const axios = require('axios');
const instance = axios.create({
  baseURL: process.env.IDENTITY_URL,
  timeout: 20000
})

module.exports = instance;