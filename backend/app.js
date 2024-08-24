require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const ItemRoutes = require("./routes/itemRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", ItemRoutes);

module.exports = app;
