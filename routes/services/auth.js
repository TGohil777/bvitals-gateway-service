const instance = require('./instance');

const verifyUser = '/api/v1/identity/verify-user';

function loginUser(data) {
    return instance.post(verifyUser, data);
}

module.exports = {
    loginUser,
}
