import config, { nodeEnv, logStars } from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import express from 'express';

const server = express(),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax : true, //allows sass files to compile -- false for scss
}));

//the magic line for EJS to serve HTML with embedded js
server.set('view engine', 'ejs');

//check if your server is working!
server.get('/', (req,res) => {
  //use render instead to serve EJS // and also variables
  res.render('index', {
    content: 'Hello from EJS and Express!'
  });
});

//this will allow you to serve any html in ./public for you :)
server.use(express.static('public'));
//hello from your api folder!
server.use('/api', apiRouter);

server.listen(config.port, () => {
  console.info('Express listening on port', config.port)
})
