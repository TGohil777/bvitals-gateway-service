const express = require('express');
const authRouter = express.Router();
const {validateLogin} = require('./validations/validateLogin')
const { loginUser } = require('./services/auth');

authRouter.post("/login-user", async (req, res) => {
    const { errors, isValid} = validateLogin(req.body);
    if (!isValid) {
        res.status(400).json(errors);
    }  
    try {
        const response = await loginUser(req.body);
        const  {error} = response.data;
        if (error) {
            console.log("Error", JSON.stringify(response.data, null, 3));
            res.status(401).json(response.data);
        } 
        
            res.status(200).json(response.data);
        
    }catch (error) {
        res.status(401).json({
            error: error.error
        });
    }
})

authRouter.route('/change-password').post(async (req, res) => {

})

authRouter.route('/users').get(async (req, res)=> {
    
})
authRouter.route('/user').put(async (req, res) => {
    
});

module.exports = authRouter;
