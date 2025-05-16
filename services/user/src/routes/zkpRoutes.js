const express = require("express");
const router = express.Router();
const { generateProof, verifyProof } = require("../controllers/zkpController");

router.post("/generate", generateProof);
router.post("/verify", verifyProof);
module.exports = router;
