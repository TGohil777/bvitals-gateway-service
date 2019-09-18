const express = require('express');
const practiceRouter = express.Router();
const validateOnboardPractice = require('./validations/onboard-practice')
const {createPractice} = require('./services/practice')
const {organizations} =  require('./services/practice')
const {singleOrganization} =  require('./services/practice')
const {singleOrgLocation} = require('./services/practice')
const {singleOrgUsers} = require('./services/practice')
const {editOrganization} = require('./services/practice')
const {editLocation} = require('./services/practice')
practiceRouter.route('/onboard-practice').post(async (req, res) => {
    const {errors, isValid} = await validateOnboardPractice(req.body)
    if (!isValid) {
        res.status(400).json(errors)
    } else {
        try{
            const token = req.headers['authorization'];
            if (!token) throw new Error('User is unauthorized')
    
            const response = await createPractice(token, req.body)
            if(!response.data) throw new Error('Create practice failed!')
            res.status(200).json(response.data);
        }catch(err){
            if (err.message) errors.error = err.message;
            res.status(401).json(errors);
        }
    }
})
//---------------------------------------------------------------------------------------------------------
practiceRouter.route('/list-organization').get(async (req, res) => {
    const token = req.headers['authorization'];
    try{
        if (!token) throw new Error('User is unauthorized')

        const response = await organizations(token, req.body)
        if(!response) throw new Error('There was an error while displaying the list!')
        res.status(200).json(response.data);
    
    }catch(err){
        return res.status(400).json({
            message : err.message
        })
    }
});
//-----------------------------------------------------------------------------------------------------------------
practiceRouter.route('/single-organization/:id').get(async (req, res) => {
    const token = req.headers['authorization'];
    const {id} = req.params
    try{
        if (!token) throw new Error('User is unauthorized')
        const response = await singleOrganization(token,id)
        if(!response) throw new Error('There was an error while displaying the details of the organization!')
        res.status(200).json(response.data);
    }catch(err){
        return res.status(400).json({
            message : err.message
        })
    }
});
//----------------------------------------------------------------------------------------------------------------------
practiceRouter.route('/associated-locations/:id').get(async (req, res) => {
    const token = req.headers['authorization'];
    const {id} = req.params
    try{
        if (!token) throw new Error('User is unauthorized')
        const response = await singleOrgLocation(token,id)
        if(!response) throw new Error('There was an error while displaying the details of the organization!')
        res.status(200).json(response.data);
    }catch(err){
        return res.status(400).json({
            message : err.message
        })
    }
});
//---------------------------------------------------------------------------------------------------------------------

practiceRouter.route('/associated-users/:id').get(async (req, res) => {
    const token = req.headers['authorization'];
    const {id} = req.params
    try{
        if (!token) throw new Error('User is unauthorized')
        const response = await singleOrgUsers(token,id)
        if(!response) throw new Error('There was an error while displaying the details of the users!')
        res.status(200).json(response.data);
    }catch(err){
        return res.status(400).json({
            message : err.message
        })
    }
});
//------------------------------------------------------------------------------------------------------------------
practiceRouter.route('/edit-organization/:orgID').put(async (req, res) => {
    const token = req.headers['authorization'];
    try{
        if (!token) throw new Error('User is unauthorized')
        const response = await editOrganization(token, req.params)
        if(!response) throw new Error('There was an error while making the changes!')
        res.status(200).json(response.data);
    }catch(err){
        return res.status(400).json({
            message : err.message
        });
    };
});

practiceRouter.route('/edit-locations/:orgID').put(async (req, res) => {
    const token = req.headers['authorization'];
    try{
        if (!token) throw new Error('User is unauthorized')
        const response = await editLocation(token, req.params)
        if(!response) throw new Error('There was an error while making the changes!')
        res.status(200).json(response.data);
    }catch(err){
        return res.status(400).json({
            message : err.message
        });
    };
});
//--------------------------------------------------------------------------------------------------------------------
module.exports = practiceRouter;
