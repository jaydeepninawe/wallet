import express from 'express';
import cors from 'cors';
import commitmentRoutes from './routes/commitmentRoutes.js';
import zkpRoutes from './routes/zkpRoutes.js';
import walletRoutes from './routes/walletRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

// Mounting all route groups
app.use('/commitment', commitmentRoutes);
app.use('/zkp', zkpRoutes);
app.use('/wallet', walletRoutes);

export default app;
