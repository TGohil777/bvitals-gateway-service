const { loginUser } = require('../services/auth');

async function userLogin(data) {
    let errros = {}
    let data = {};
    try {
        const response = await loginUser(data);
        data = response.data;
    } catch (err) {
        errros.auth = err;
    }

    return {
        errros,
        data
    }
}

module.exports = {
    userLogin
}