require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");


const app = express();
const { PORT = 3001 } = process.env;

// Enable CORS
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

// Main routes
app.use("/", routes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});