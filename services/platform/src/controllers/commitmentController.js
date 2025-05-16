import { verifyCommitmentValidity } from '../utils/cryptoUtils.js';

export const commitmentsStore = {};

export const receiveCommitment = async (req, res) => {
  try {
    const { party, commitment, zkp } = req.body;

    if (!verifyCommitmentValidity(commitment, zkp)) {
      return res.status(400).json({ error: 'Invalid commitment or ZKP' });
    }

    commitmentsStore[party] = { commitment, zkp };

    res.json({ message: `Commitment from ${party} received and verified.` });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const verifyCommitment = (req, res) => {
  // Example additional verification endpoint
  const { commitment, zkp } = req.body;
  const valid = verifyCommitmentValidity(commitment, zkp);
  res.json({ valid });
};
