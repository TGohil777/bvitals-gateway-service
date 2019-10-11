//const { createPractice, editPractice, practices, practice } = require('../services/practice');
const {createPractice} = require('../services/practice')
async function onboardPractice(token, body) {
    let errors = {}
    let data = {};
    try {
        const response = await createPractice(token, body);
        data = response.data;
    } catch (err) {
        errors.practice = err.message;
    }

    return {
        errors,
        data
    }
}

async function updatePractice(data){
    try{
        let errors = {};
        let data = {};

        const response = await editPractice(data)
        data = response.data
    }catch(err){
        errors.practice = err;
    }
    return {
        errors,
        data
    }
    
}

async function getPractices(){
    let errors = {};
    let data = {};
    try{
    const response = await practices()
    data = response.data
    }catch(err){
        errors.practice = err
    }
    return{
        errors,
        data
    }
    
}
async function getPractice(){
    let errors = {};
    let data = {};
    try{
        const response = await practice()
        data = response.data
    }catch(err){
        errors.practice = err
    }
    return{
        errors,
        data
    }
}


module.exports = {
    onboardPractice,
    updatePractice,
    getPractices,
    getPractice
}