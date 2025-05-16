import { verifyZKP } from '../utils/zkpUtils.js';

export const verifyZKPHandler = (req, res) => {
  const { commitment, zkp } = req.body;
  const valid = verifyZKP(commitment, zkp);
  res.json({ valid });
};
