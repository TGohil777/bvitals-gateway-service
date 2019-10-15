require('dotenv').config()
const express = require ('express');
const bodyParser = require ('body-parser')
const morgan = require ('morgan')
const fs= require('fs')
const chalk = require('chalk')
const app = express();
const fileUpload = require('express-fileupload')
app.use(fileUpload())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
morgan.token('id', function getId(req) {
    return req.id;
})
    
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(morgan(':id :method :url :response-time', {
  stream: fs.createWriteStream('./identity.log',{flags: 'a'})
}));


app.use('/api/v1/gateway', require('./routes/auth'));
app.use('/api/v1/gateway', require('./routes/practice'));

app.listen(8081, () => {
  console.log(chalk.green(`Express server listening on port ${process.env.PORT}`));
});

