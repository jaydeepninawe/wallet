exports.generateCommitment = (req, res) => {
  const { shard, randomness } = req.body;
  const cryptoUtils = require("../utils/cryptoUtils");
  const commitment = cryptoUtils.hashCommitment(shard, randomness);
  res.json({ commitment });
};
