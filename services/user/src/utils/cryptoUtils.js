const crypto = require("crypto");

exports.generateKeyShard = () => {
  return crypto.randomBytes(32).toString("hex");
};

exports.hashCommitment = (shard, randomness) => {
  return crypto.createHash("sha256").update(shard + randomness).digest("hex");
};
