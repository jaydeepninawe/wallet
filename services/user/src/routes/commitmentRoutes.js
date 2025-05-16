const express = require("express");
const router = express.Router();
const { generateCommitment } = require("../controllers/commitmentController");

router.post("/generate", generateCommitment);
module.exports = router;
