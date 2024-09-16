const express = require('express'); 

// Import All routes
const movieRouter = require('./movies/movie-router.js');
const ratingRouter = require('./ratings/rating-router.js');
const starRouter = require('./stars/star-router.js');


const server = express();
server.use(express.json());

// Create api for all routes
server.use('/api/movies', movieRouter);
server.use('/api/ratings', ratingRouter);
server.use('/api/stars', starRouter);

module.exports = server;
