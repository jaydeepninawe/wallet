import { verifyZKPProof } from '../utils/zkpUtils.js';

export const verifyZKP = (req, res) => {
  const { commitment, zkp } = req.body;

  const isValid = verifyZKPProof(commitment, zkp);
  res.json({ verified: isValid });
};