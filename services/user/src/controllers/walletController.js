exports.generateWalletShard = (req, res) => {
  const cryptoUtils = require("../utils/cryptoUtils");
  const shard = cryptoUtils.generateKeyShard();
  res.json({ shard });
};
