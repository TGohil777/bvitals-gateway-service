require('dotenv').config()
const express = require ('express');
const bodyParser = require ('body-parser')
const morgan = require ('morgan')
const fs= require('fs')
const chalk = require('chalk')
<<<<<<< HEAD
const proxy = require('express-http-proxy')
=======
const cors = require('cors');
>>>>>>> 464e922... BV-014: Create Login end point for queens ui/Api Gateway
const app = express();
app.use(bodyParser.json());

morgan.token('id', function getId(req) {
    return req.id;
})
    
<<<<<<< HEAD
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
  
  app.use(morgan(':id :method :url :response-time', {
    stream: fs.createWriteStream('./identity.log',{flags: 'a'})
  }));
  

  app.use('/api/v1/gateway', require('./routes/auth'));
  
  app.listen(8081, () => {
      console.log(chalk.green(`Express server listening on port ${process.env.PORT}`));
  });
  
=======
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(morgan(':id :method :url :response-time', {
  stream: fs.createWriteStream('./identity.log',{flags: 'a'})
}));


app.use('/api/v1/gateway', require('./routes/auth'));


app.listen(process.env.PORT, () => {
  console.log(chalk.green(`Express server listening on port ${process.env.PORT}`));
});

>>>>>>> 464e922... BV-014: Create Login end point for queens ui/Api Gateway
