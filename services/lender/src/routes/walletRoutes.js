import express from 'express';
import { finalizeWallet } from '../controllers/walletController.js';

const router = express.Router();

// Endpoint for finalizing wallet key generation (e.g., broadcasting or aggregating)
router.post('/finalize', finalizeWallet);

export default router;
