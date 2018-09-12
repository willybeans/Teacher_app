import express from 'express';
import studentRouter from './student';
import teacherRouter from './teacher';
import assignmentRouter from './assignment';

const router = express.Router();

// CRUD routes
router.use('/student', studentRouter);
router.use('/login', loginRouter);
router.use('/teacher', teacherRouter);
router.use('/assignments', assignmentsRouter);

export default router;
