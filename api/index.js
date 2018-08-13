import express from 'express';
import { MongoClient } from 'mongodb';
import config, { nodeEnv } from '../config';

const mongo = require('mongodb'),
  mongoose = require('mongoose'),
  app = express(),
  router = express.Router(),
  path = require('path');

//import .env file for mongoDB URI
require("dotenv").config({
  path: path.resolve(__dirname, '..', '.env'),
});

mongoose.Promise = global.Promise;
mongoose.connect(db,
  { useNewUrlParser: true })
  .then( (res) => {
    console.log('Connected to DB');
    console.log('DB: ' + db);
  }).catch((err) => {
    console.log('Connection failed');
    console.log(err);
  });

const router = express.Router();

router.get('/', (req,res) => {
  res.send( {data: []} );
});

export default router;
