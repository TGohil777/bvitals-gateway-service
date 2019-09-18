require('dotenv').config()
const express = require ('express');
const bodyParser = require ('body-parser')
const morgan = require ('morgan')
const fs= require('fs')
const chalk = require('chalk')
const app = express();
app.use(bodyParser.json());

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


app.listen(process.env.PORT, () => {
  console.log(chalk.green(`Express server listening on port ${process.env.PORT}`));
});

