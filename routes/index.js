import { Router } from 'express';
const router = Router();
import { exportTutorialsRouter } from './turorial.routes.js';
import { usersRouter } from './users.routes.js';

router.use('/tutorials', exportTutorialsRouter);
router.use('/users', usersRouter);

export const exportRouter = router;
