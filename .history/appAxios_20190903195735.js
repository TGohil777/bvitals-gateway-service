const express = require ('express');
const bodyParser = require ('body-parser')
const cors = require ("cors")
const axios = require ('axios')
const app = express();




if(){
    async  function login (){

        axios.get('/....login' )
    .then(res => {
    console.log(res.data)
        })
    
        try{
            
        axios.get('/....verification' )
        .then(res => {
        console.log(res.data)
            })
    
        }catch(err){
    console.log("Credentials did not match")
    
        }
    
    
    } 
       
}
else{


    axios.get('/....signup' )
.then(res => {
console.log(res.data)
    })
    


}
