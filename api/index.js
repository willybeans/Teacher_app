import express from 'express';
import { MongoClient } from 'mongodb';
import config, { nodeEnv } from '../config';

const mongo = require('mongodb'),
  mongoose = require('mongoose'),
  app = express(),
  router = express.Router(),
  path = require('path');

router.get('/', (req,res) => {
  res.send( {data: []} );
});

export default router;
