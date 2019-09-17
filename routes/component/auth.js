const { loginUser }  = require('../services/auth');

const userLogin = async (data, next) => {
    try {
        const response = await loginUser(data);
        next(null, response.data);
    } catch (err) {
        errors = err.message
        next(errors, null);
    }
}
module.exports = {
    userLogin
}