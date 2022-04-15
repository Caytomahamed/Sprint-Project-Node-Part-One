const express = require('express'); 

// Import All routes

const server = express();
server.use(express.json());

// Create api for all routes

module.exports = server;
