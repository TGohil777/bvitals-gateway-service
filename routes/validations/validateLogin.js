const validator = require('validator')
const userLogin = require("../component/auth")
module.exports = function validateLogin(datas) {
    let errors = {};
    datas.email = !userLogin(datas.email) ? datas.email : "";
    datas.password = !userLogin(datas.password) ? datas.password : "";
  
    if (!Validator.userLogin(datas.email)) {
      errors.email = "Email is invalid";
    }
  
    if (Validator.userLogin(datas.email)) {
      errors.email = "Email is a required field";
    }
  
    if (Validator.userLogin(datas.password)) {
      errors.password = "Password is a required field";
    }
  
    return {
      errors,
      userLogin: userLogin(errors)
    };
  };

  module.exports={
    validateLogin
  }