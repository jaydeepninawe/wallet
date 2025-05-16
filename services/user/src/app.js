const express = require("express");
const app = express();
const commitmentRoutes = require("./routes/commitmentRoutes");
const walletRoutes = require("./routes/walletRoutes");
const zkpRoutes = require("./routes/zkpRoutes");

app.use(express.json());
app.use("/api/commitment", commitmentRoutes);
app.use("/api/wallet", walletRoutes);
app.use("/api/zkp", zkpRoutes);

module.exports = app;