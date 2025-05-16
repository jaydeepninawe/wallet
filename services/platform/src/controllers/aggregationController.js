import { aggregateCommitments } from '../utils/cryptoUtils.js';

import { commitmentsStore } from './commitmentController.js'; // import commitment storage

export const aggregateCommitmentsHandler = (req, res) => {
  try {
    const commitments = Object.values(commitmentsStore).map(item => item.commitment);

    if (commitments.length < 3) {
      return res.status(400).json({ error: 'Not all commitments received yet.' });
    }

    const aggregatedKey = aggregateCommitments(commitments);

    res.json({ aggregatedKey });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
