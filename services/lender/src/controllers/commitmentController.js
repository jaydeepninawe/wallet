import { storeCommitment } from '../utils/cryptoUtils.js';

export const receiveCommitment = (req, res) => {
  const { party, commitment, zkp } = req.body;

  // Store commitment data for future verification
  storeCommitment(party, commitment, zkp);

  res.json({ message: `Commitment received from ${party}` });
};