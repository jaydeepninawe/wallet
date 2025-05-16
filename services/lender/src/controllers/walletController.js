import { aggregateKeys } from '../utils/cryptoUtils.js';

export const finalizeWallet = (req, res) => {
  const { commitments } = req.body;

  const walletPubKey = aggregateKeys(commitments);
  res.json({ walletPublicKey: walletPubKey });
};