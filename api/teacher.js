import { Router } from 'express';

const teacher = Router();

teacher.get('/', (req,res) => {
  return res.status(400).json({
    message: 'Teachers fired succesful'
  });
});

export default teacher;
