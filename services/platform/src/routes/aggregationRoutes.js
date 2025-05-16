import express from 'express';
import { aggregateCommitmentsHandler } from '../controllers/aggregationController.js';

const router = express.Router();

router.get('/aggregate', aggregateCommitmentsHandler);

export default router;
