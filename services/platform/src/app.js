import express from 'express';
import cors from 'cors';

import commitmentRoutes from './routes/commitmentRoutes.js';
import aggregationRoutes from './routes/aggregationRoutes.js';
import zkpRoutes from './routes/zkpRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/commitments', commitmentRoutes);
app.use('/api/aggregation', aggregationRoutes);
app.use('/api/zkp', zkpRoutes);

export default app;
