const { loginUser }  = require('../services/auth');

const userLogin = async (data) => {
    try {
        const response = await loginUser(data);
        return response.data;
    } catch (err) {
        return err;
    }
}
module.exports = {
    userLogin
}