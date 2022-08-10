import express, { Router } from 'express';
import retaildODRouter from './retail-od';

const router: Router = express.Router();

router.use('/retail-od', retaildODRouter);

export default router;