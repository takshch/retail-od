import express, { Router } from 'express';
import { createRetailOD } from '../controllers/retail-od';
import { validateCreateRetailOD } from '../validators/retail-od';
import { requireDBConnection } from '../middlewares/require-db-connection';

const router: Router = express.Router();

router.post('/create', requireDBConnection, validateCreateRetailOD, createRetailOD);

export default router;