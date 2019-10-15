const Validator = require('validator')
const isEmpty = require('./isEmpty')

module.exports = function validateOnboardPractice(body){
    let errors = {}
    //const {currentUser, body} = req
    body.orgname = !isEmpty(body.orgname) ? body.orgname : "";
    body.webaddress =  !isEmpty(body.webaddress) ? body.webaddress : "";
    body.subdomain = !isEmpty(body.subdomain) ? body.subdomain : "";
    body.themecolor = !isEmpty(body.themecolor) ? body.themecolor : "";
    body.logourl = !isEmpty(body.logourl) ? body.logourl : "";
    body.orglocation = !isEmpty(body.orglocation) ? body.orglocation : "";
    body.address1 = !isEmpty(body.address1) ? body.address1 : "";
    body.city = !isEmpty(body.city) ? body.city : "";
    body.state = !isEmpty(body.state) ? body.state : "";
    body.zipcode = !isEmpty(body.zipcode) ? body.zipcode : "";
    body.firstname = !isEmpty(body.firstname) ? body.firstname : "";
    body.lastname = !isEmpty(body.lastname) ? body.lastname : "";
    body.email = !isEmpty(body.email) ? body.email : "";
    body.password = !isEmpty(body.password) ? body.password : "";

    if(Validator.isEmpty(body.orgname)){
        errors.orgname = "Practice name must be specified!"
    }


    if((!Validator.isEmpty(body.webaddress) && (!Validator.isURL(body.webaddress)))){
        errors.invalidaddress = "Webaddress is invalid!"
    }

    if(Validator.isEmpty(body.subdomain)){
        errors.subdomain = "Subdomain must be specified!"
    }else{
        if(!Validator.isFQDN(body.subdomain)){
            errors.invalidsubdomain = "Invalid subdomain!"
        }
    }

    if(Validator.isEmpty(body.themecolor)){
        errors.themecolor = "Themecolor must be specified!" 
    }

    if(Validator.isEmpty(body.logourl)){
        errors.logourl = "Logourl must be specified!"
    }

    if(Validator.isEmpty(body.orglocation)){
        errors.orglocation = "Location for practice must be specified!"
    }

    if(Validator.isEmpty(body.address1)){
        errors.address1 = "Address 1 must be specified!"
    }


    if(Validator.isEmpty(body.city)){
        errors.city= "City must be specified!"
    }

    if(Validator.isEmpty(body.state)){
        errors.state = "State must be specified!"
    }

    if(Validator.isEmpty(body.zipcode)){
        errors.zipcode = "Zipcode must be specified!"
    }

    if(Validator.isEmpty(body.firstname)){
        errors.firstname = "First name must be specified for account creation!"
    }
    
    if(Validator.isEmpty(body.lastname)){
        errors.lastname = "Last name must be specfied for account creation!"
    }

    if(Validator.isEmpty(body.email)){
        errors.email = "Email must be specified for account creation!"
    }else{
        if(!Validator.isEmail(body.email)){
            errors.invalidUserEmail = "Invalid email!"
        }
    }

    if(Validator.isEmpty(body.password)){
        errors.password = "Password must be specified for account creation!"
    }
      if (!Validator.isLength(body.password, { min: 6, max: 30 })) {
        errors.password = "Password should be 6 to 30 characters long";
  }

    
    return {
        errors,
        isValid : isEmpty(errors)
    }
}

