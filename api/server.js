const express = require('express'); 

// ROUTES
const notesRouter = require('./movies/movie-router.js');

const server = express();
server.use(express.json());

server.use('/api/notes', notesRouter);

server.use('*', (req, res) => {
  // catch all 404 errors middleware
  res.status(404).json({ message: `${req.method} ${req.baseUrl} not found!` });
});

module.exports = server;
