import express from 'express';
import { verifyZKP } from '../controllers/zkpController.js';

const router = express.Router();

// Endpoint for verifying ZKP
router.post('/verify', verifyZKP);

export default router;
