import express from 'express';
import { receiveCommitment, verifyCommitment } from '../controllers/commitmentController.js';

const router = express.Router();

router.post('/receive', receiveCommitment);
router.post('/verify', verifyCommitment);

export default router;
