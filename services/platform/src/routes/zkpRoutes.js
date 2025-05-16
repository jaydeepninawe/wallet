import express from 'express';
import { verifyZKPHandler } from '../controllers/zkpController.js';

const router = express.Router();

router.post('/verify', verifyZKPHandler);

export default router;
