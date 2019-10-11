const Validator = require('validator')
const isEmpty = require('./isEmpty')

module.exports = function validateOnboardPractice(body){
    let errors = {}
//     //const {currentUser, body} = req
//     body.orgname = !isEmpty(body.orgname) ? body.orgname : "";
//     body.webaddress = !isEmpty(body.webaddress) ? body.webaddress : "";
//     body.subdomain = !isEmpty(body.subdomain) ? body.subdomain : "";
//     body.themecolor = !isEmpty(body.themecolor) ? body.themecolor : "";
//     body.logourl = !isEmpty(body.logourl) ? body.logourl : "";
//     //body.currentUser = !isEmpty(body.currentUser) ? body.currentUser : "";
//     body.orglocation = !isEmpty(body.orglocation) ? body.orglocation : "";
//     body.address1 = !isEmpty(body.address1) ? body.address1 : "";
//     body.address2 = !isEmpty(body.address2) ? body.address2 : "";
//     body.city = !isEmpty(body.city) ? body.city : "";
//     body.state = !isEmpty(body.state) ? body.state : "";
//     body.zipcode = !isEmpty(body.zipcode) ? body.zipcode : "";
//     body.lat = !isEmpty(body.lat) ? body.lat : "";
//     body.lng = !isEmpty(body.lng) ? body.lng : "";
//     body.newUserFirstName = !isEmpty(body.newUserFirstName) ? body.firstname : "";
//     body.lastname = !isEmpty(body.newUserLastName) ? body.newUserLastName : "";
//     body.email = !isEmpty(body.newUserEmail) ? body.newUserEmail : "";
//     body.password = !isEmpty(body.newUserPassword) ? body.newUserPassword : "";

//     if(Validator.isEmpty(body.orgname)){
//         errors.orgname = "Practice name must be specified!"
//     }

//     if(Validator.isEmpty(body.webaddress)){
//         errors.webaddress = "Webaddress must be autogenerated!"
//     }

//     if(Validator.isEmpty(body.subdomain)){
//         errors.subdomain = "Subdomain must be specified!"
//     }

//     if(Validator.isURL(body.logourl)){
//         errors.logourl = "Invalid LogoURL for practice. Specify a valid LogoURL!"
//     }

//     if(Validator.isEmpty(body.themecolor)){
//         errors.themecolor = "Themecolor must be specified!" 
//     }

//     if(Validator.isEmpty(body.logourl)){
//         errors.logourl = "Logourl must be specified!"
//     }
    
//     /*if(Validator.isEmpty(body.currentUser)){
//         errors.currentUser = "Auth ID must be specified!"
//     }*/

//     if(Validator.isEmpty(body.orglocation)){
//         errors.orglocation = "Location for practice must be specified!"
//     }

//     if(Validator.isEmpty(body.address1)){
//         errors.address1 = "Address 1 must be specified!"
//     }

//     if(Validator.isEmpty(body.address2)){
//         errors.address2 = "Address 2 must be specified!"
//     }

//     if(Validator.isEmpty(body.city)){
//         errors.city= "City must be specified!"
//     }

//     if(Validator.isEmpty(body.state)){
//         errors.state = "State must be specified!"
//     }

//     if(Validator.isEmpty(body.zipcode)){
//         errors.zipcode = "Zipcode must be specified!"
//     }

//     if(Validator.isEmpty(body.lat)){
//         errors.lat = "Latitude must be specified!"
//     }

//     if(Validator.isEmpty(body.lng)){
//         errors.lng = "Longitude must be specified!"
//     }

//     if(Validator.isEmpty(body.newUserFirstName)){
//         errors.newUserFirstName = "First name must be specified for account creation!"
//     }
    
//     if(Validator.isEmpty(body.newUserLastName)){
//         errors.newUserLastName = "Last name must be specfied for account creation!"
//     }

//     if(Validator.isEmpty(body.newUserEmail)){
//         errors.newUserEmail = "Email must be specified for account creation!"
//     }

//     if(Validator.isEmpty(body.newUserPassword)){
//         errors.newUserPassword = "Password must be specified for account creation!"
//     }

//     if(!Validator.isEmail(body.email)){
//         errors.email = "Invalid email!"
//     }
    

//     return {
//         errors,
//         isValid : isEmpty(errors)
//     }
// }


body.orgname = !isEmpty(body.orgname) ? body.orgname : "";
    body.webaddress =  !isEmpty(body.webaddress) ? body.webaddress : "";
    body.subdomain = !isEmpty(body.subdomain) ? body.subdomain : "";
    body.themecolor = !isEmpty(body.themecolor) ? body.themecolor : "";
    body.logourl = !isEmpty(body.logourl) ? body.logourl : "";
    //body.currentUser = !isEmpty(body.currentUser) ? body.currentUser : "";
    body.orglocation = !isEmpty(body.orglocation) ? body.orglocation : "";
    body.address1 = !isEmpty(body.address1) ? body.address1 : "";
    body.city = !isEmpty(body.city) ? body.city : "";
    body.state = !isEmpty(body.state) ? body.state : "";
    body.zipcode = !isEmpty(body.zipcode) ? body.zipcode : "";
    body.newUserFirstName = !isEmpty(body.newUserFirstName) ? body.newUserFirstName : "";
    body.newUserLastName = !isEmpty(body.newUserLastName) ? body.newUserLastName : "";
    body.newUserEmail = !isEmpty(body.newUserEmail) ? body.newUserEmail : "";
    body.email = !isEmpty(body.email) ? body.email : "";
    body.newUserPassword = !isEmpty(body.newUserPassword) ? body.newUserPassword : "";

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

    }else{
        if(!Validator.isInt(body.zipcode)){
            errors.zipvalue = "Zipcode must be specified in integer format!"
        }
    }

    if(Validator.isEmpty(body.newUserFirstName)){
        errors.newUserFirstName = "First name must be specified for account creation!"
    }
    
    if(Validator.isEmpty(body.newUserLastName)){
        errors.newUserLastName = "Last name must be specfied for account creation!"
    }

    if(Validator.isEmpty(body.newUserEmail)){
        errors.newUserEmail = "Email must be specified for account creation!"
    }else{
        if(!Validator.isEmail(body.newUserEmail)){
            errors.invalidUserEmail = "Invalid email!"
        }
    }
    // if(Validator.isEmpty(body.email)){
    //     errors.email = "Email must be specified!"
    // }else{
    //     if(!Validator.isEmail(body.email)){
    //         errors.invalidemail = "Invalid email!"
    //     }
    // }

    if(Validator.isEmpty(body.newUserPassword)){
        errors.newUserPassword = "Password must be specified for account creation!"
    }

    return {
        errors,
        isValid: isEmpty(errors)
        }
}