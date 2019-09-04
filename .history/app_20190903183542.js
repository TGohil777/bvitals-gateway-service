const express = require ('express');
const bodyParser = require ('body-parser')
const cors = require ("cors")
const axios = require ('axios')
const app
 app.use(express);

axios.get('http://zetcode.com/javascript/axios/' )
.then(res => {
console.log(res.data)
    })



// app.listen(8084, () =>{
// console.log("Starting with the services")
// })