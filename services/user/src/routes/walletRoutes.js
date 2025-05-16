const express = require("express");
const router = express.Router();
const { generateWalletShard } = require("../controllers/walletController");

router.post("/generate-shard", generateWalletShard);
module.exports = router;
