require('dotenv').config();
const express = require('express');

// You will need `movie-model.js`
// The middleware functions also need to be required

const router = express.Router();

router.get('/', async (req, res) => {
    // RETURN AN ARRAY WITH ALL THE MOVIES
});

// Get Single Movie
router.get('/:id', async (req, res) => {
    // RETURN THE MOVIE OBJECT
});

// Add movie
router.post('/', async (req, res) => {
    // ADD NEW MOVIE TO THE DATABASE
});

// Update movie
router.put('/:id', async (req, res) => {
    // UPDATE THE MOVIE IN THE DATABASE
});

// Delete movie
router.delete('/:id', async (req, res) => {
    // DELETE THE MOVIE FROM THE DATABASE
});

module.exports = router;
