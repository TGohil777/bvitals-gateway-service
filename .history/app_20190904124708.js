const express = require ('express');
const bodyParser = require ('body-parser')
const cors = require ("cors")
const axios = require ('axios')
const morgan = require ('morgan')
const router = require ('router')
const app = express();

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
    stream: fs.createWriteStream('./access.log',{flags: 'a'})
  }));
  
  
  app.listen(process.env.PORT, () => {
      console.log(chalk.green(`Express server listening on port ${process.env.PORT}`));
    });
  

