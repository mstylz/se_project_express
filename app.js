const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const app = express();
const { PORT = 3001 } = process.env;

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

// Temporary authorization middleware
app.use((req, res, next) => {
  req.user = {
    _id: "69dabc9bf4fd8b59d02ab067",
  };
  next();
});

// Main routes
app.use("/", routes);

// Handle non-existent routes (404)
app.use((req, res) => {
  res.status(404).send({
    message: "Requested resource not found",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});