const express = require('express');
const authRouter = express.Router();
const authComponent = require('./component/auth');

authRouter.route('/login-user').post(async (req, res) => {

    const {errs,datas} = await authValidate.validateLogin(req.body)

    if(err) {
        return res.status(401).json({
            message : errs.auth.message
        })     
    }

    if(!err){
        return res.status(200).json(data)
    }

    const {errors, data} = await authComponent.userLogin(req.body);

    if (errors) return res.status(401).json({
        message: errors.auth.message
    })

    if (!errors) {
        return res.status(200).json(data);
    }
})

authRouter.route('/change-password').post(async (req, res) => {

})

authRouter.route('/user').put(async (req, res) => {

});


module.exports = authRouter;
