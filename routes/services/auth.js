const instance = require('./instance');
const authinstance = require('./authinstance')
const verifyUser = 'api/v1/identity-service/verify-user';
const currentUser = 'api/v1/identity-service/current-user'
function loginUser(data) {
    return instance.post(verifyUser, data)
}
function getCurrentUser(token){
    const authorizedInstance = authinstance(token);
    authorizedInstance.interceptors.response.use((response) => {
      return response;
    }, function (error) {
      if (error.response.status === 401) {
        return Promise.reject(error.response.data);
      }
    
      if (error.response.status === 400) {
        return Promise.reject(error.response.data);
      }
    });
    
    return authorizedInstance.get(currentUser)
}

module.exports = {
    loginUser,
    getCurrentUser
}
