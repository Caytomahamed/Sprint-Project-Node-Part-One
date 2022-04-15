require('dotenv').config();
const express = require('express');

// You will need `star-model.js`
// The middleware functions also need to be required

const router = express.Router();

router.get('/', async (req, res) => {
  // RETURN AN ARRAY WITH ALL THE STARS
});

// Get Single star
router.get('/:id', async (req, res) => {
   // RETURN THE STAR OBJECT
});

// Add star
router.post('/', async (req, res) => {
    // ADD NEW STAR TO THE DATABASE
});

// Update star
router.put('/:id', async (req, res) => {
    // UPDATE THE STAR IN THE DATABASE
});

// Delete star
router.delete('/:id', async (req, res) => {
    // DELETE THE STAR FROM THE DATABASE
});

module.exports = router;
