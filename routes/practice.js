const express = require('express');
const practiceRouter = express.Router();
const validateOnboardPractice = require('./validations/onboard-practice')
const {createPractice, practiceLogoUpload, organizations, singleOrganization, singleOrgLocation,
    singleOrgUsers, editOrganization, editLocation, deleteOrg} = require('./services/practice')

const {getCurrentUser} = require('./services/auth')
//endpoint for onboarding a practice
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

/** 
*   this endpoint has been created, so that a practice can have a logo for itself. 
*   this will further call document-service's /uploadlogo endpoint, which will have a record of the
*   image/logo path.
*/
practiceRouter.route('/upload').post(async (req, res) => {
    let errors = {};
    const token = req.headers['authorization'];
    try {
        if(!token){
            errors.missingtoken = 'Token is missing.'
            throw errors;
        }
        //checking the current user from the identity service's current-user endpoint.
        await getCurrentUser(token);
        //sending the logo image to document service and expecting a message and url in return.
        const response = await practiceLogoUpload(token, req.files.logourl)
        res.status(200).json(response.data)
    } catch (err) {
        if (err.isValid===false) {
            errors.unauthorized = 'User not authorized.';
        } else {
            errors = err;
        }
        res.status(400).json(errors)
    }
})


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

practiceRouter.route('/delete-organization').put(async (req, res) => {
    const token = req.headers['authorization'];
    try{
        if (!token) throw new Error('User is unauthorized')

        const response = await deleteOrg(token, req.body)
        if(!response) throw new Error('There was an error!')
        res.status(200).json(response.data);
    
    }catch(err){
        return res.status(400).json({
            message : err.message
        })
    }
});

module.exports = practiceRouter;
