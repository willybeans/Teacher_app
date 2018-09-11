import { Router } from 'express';

const login = Router();

login.get('/', (req,res) => {
  return res.status(400).json({
    message: 'Login succesful'
  });
});

export default login;
