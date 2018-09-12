import express from 'express';
import studentRouter from './student';
import loginRouter from './login';
import teacherRouter from './teacher';
import assignmentsRouter from './assignments';

const router = express.Router();

// CRUD routes
router.use('/student', studentRouter);
router.use('/login', loginRouter);
router.use('/teacher', teacherRouter);
router.use('/assignments', assignmentsRouter);

export default router;
