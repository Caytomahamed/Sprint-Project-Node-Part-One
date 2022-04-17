require("dotenv").config();
const { json } = require("express");
const express = require("express");

// You will need `movie-model.js`
const movies = require("./movie-model.js");
// The middleware functions also need to be required
// import middleware functions
const {  checkReleaseDate } = require("../../middleware/index.js");

const router = express.Router();

router.get("/", async (req, res) => {
  // RETURN AN ARRAY WITH ALL THE MOVIES
  try {
    const movie = await movies.find();
    res.status(200).json(movie);
    console.log(movie);
  } catch (error) {
    res.status(200).json([]);
  }
});

// Get Single Movie
router.get("/:id", async (req, res) => {
  // RETURN THE MOVIE OBJECT
  let id = Number(req.params.id);
  try {
    const movie = await movies.findById(id);
    if (movie.id === id) {
      res.status(200).json(movie);
    }
  } catch (error) {
    res
      .status(404)
      .json({ message: ` there is no movie with the given ${id}` });
  }
});

// Add movie
router.post("/",  checkReleaseDate, async (req, res) => {
  // ADD NEW MOVIE TO THE DATABASE
  let movie = req.body;
  try {
    const addMovie = await movies.add(movie);
    res.status(201).json({ id: addMovie.id });
  } catch (error) {
    res.status(400).json({
      message: `request body is missing any of the required fields`,
    });
  }
});

// Update movie
router.put("/:id", async (req, res) => {
  // UPDATE THE MOVIE IN THE DATABASE
  let id = Number(req.params.id);
  let changes = req.body;
  try {
    const movie = await movies.update(id, changes);
    res.status(200).json({ id, ...changes });

    if (movie.id !== id) {
      res
        .status(404)
        .json({ message: `there is no movie with the given ${id}` });
    }
  } catch (error) {
    res.status(400).json({
      message: ` request body is missing any of the required fields `,
    });
  }
});

// Delete movie
router.delete("/:id", async (req, res) => {
  // DELETE THE MOVIE FROM THE DATABASE
  let id = Number(req.params.id);
  try {
    const movei = await movies.remove(id);
    res.status(200).json({ id });
  } catch (error) {
    res
      .status(404)
      .json({ message: ` there is no movie with the given ${id} ` });
  }
});

module.exports = router;
