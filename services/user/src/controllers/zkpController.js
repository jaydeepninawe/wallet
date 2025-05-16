exports.generateProof = (req, res) => {
  const { shard } = req.body;
  const zkpUtils = require("../utils/zkpUtils");
  const proof = zkpUtils.generateZKP(shard);
  res.json({ proof });
};

exports.verifyProof = (req, res) => {
  const { proof } = req.body;
  const zkpUtils = require("../utils/zkpUtils");
  const verified = zkpUtils.verifyZKP(proof);
  res.json({ verified });
};