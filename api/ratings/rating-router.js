require('dotenv').config();
const express = require('express');

// You will need `rating-model.js`
// The middleware functions also need to be required

const router = express.Router();

router.get('/', async (req, res) => {
    // RETURN AN ARRAY WITH ALL THE RATINGS
});

// Get Single rating
router.get('/:id', async (req, res) => {
    // RETURN THE RATING OBJECT
});

// Add rating
router.post('/', async (req, res) => {
    // ADD NEW RATING TO THE DATABASE
});

// Update rating
router.put('/:id', async (req, res) => {
    // UPDATE THE RATING IN THE DATABASE
});

// Delete rating
router.delete('/:id', async (req, res) => {
    // DELETE THE RATING FROM THE DATABASE
});

module.exports = router;
