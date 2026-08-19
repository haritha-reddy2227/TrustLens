const express = require("express");
const cors = require("cors");
require("dotenv").config();

const securityRoutes = require("./routes/securityRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "TrustLens API is running"
    });
});

app.use("/api/security", securityRoutes);

module.exports = app;