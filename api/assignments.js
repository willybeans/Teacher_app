import { Router } from 'express';

const assignments = Router();

assignments.get('/', (req,res) => {
  return res.status(400).json({
    message: 'Assignments fired succesful'
  });
});

export default assignments;
