const validate = require('validator')
const isEmpty = require('./isEmpty')
function validateLogin(data) {
let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!validate.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if(validate.isEmpty(data.email)){
    errors.email = "Email is a required field"
  }

  if (!validate.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password should be 6 to 30 characters long";
  }

  if (validate.isEmpty(data.password)) {
    errors.password = "Password is a required field";
  }
  return {
    errors,
    isValid: isEmpty(errors)
    }
};

function validateCreateUser(data) {
let errors = {}






};

function validateEditUser(data) {
let errors = {}

  data.newfirstname = !isEmpty(data.newfirstname) ? data.newfirstname : "";
  data.newlastname = !isEmpty(data.newlastname) ? data.newlastname : "";
  data.newemail = !isEmpty(data.newemail) ? data.newemail : "";

  if (validate.isEmpty(data.newfirstname)) {
    errors.password = "First name is a required field";
  }

  if (validate.isEmpty(data.newlastname)) {
    errors.password = "Last name is a required field";
  }

  if (!validate.isEmail(data.newemail)) {
    errors.newemail = "Email is invalid";
  }

  if (validate.isEmpty(data.newemail)) {
    errors.password = "Email is a required field";
  }

  return {
    errors,
    isValid: isEmpty(errors)
    }
};


function validateChangePwd(data){
let errors = {}
  data.newpassword =!isEmpty(data.newpassword) ? data.newpassword : "";

  if (validate.isEmpty(data.newpassword)) {
    errors.newpassword = "Password is a required field";
  }

  if (!validate.isLength(data.newpassword, { min: 6, max: 30 })) {
    errors.newpassword = "Password should be 6 to 30 characters long";
  }

  return {
    errors,
    isValid: isEmpty(errors)
    }
};

module.exports={
  validateLogin,
  validateCreateUser,
  validateEditUser,
  validateChangePwd
}
