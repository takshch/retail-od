import express, { Router } from 'express';
import { createRetailOD } from '../controllers/retail-od';
import { validateCreateRetailOD } from '../validators/retail-od';

const router: Router = express.Router();

router.post('/', validateCreateRetailOD, createRetailOD);

export default router;