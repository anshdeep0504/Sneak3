// Import dotenv and configure it to load environment variables from .env file
require("dotenv").config();

// Import express module
const express = require("express");

// Create an instance of express
const app = express();

// Define the port number
const port = process.env.PORT || 8005; // Use the provided port or default to 8005

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port number ${port}`);
});
