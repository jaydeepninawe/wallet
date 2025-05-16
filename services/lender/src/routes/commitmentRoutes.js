import express from 'express';
import { receiveCommitment } from '../controllers/commitmentController.js';

const router = express.Router();

// Endpoint for receiving commitment from user/platform
router.post('/receive', receiveCommitment);

export default router;
