import express from 'express';
import studentRouter from './student';

const router = express.Router();

// CRUD routes
router.use('/student', studentRouter);

export default router;
