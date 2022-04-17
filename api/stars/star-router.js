require("dotenv").config();
const express = require("express");

// You will need `star-model.js`
const stars = require("./star-model.js");
// The middleware functions also need to be required

const router = express.Router();

router.get("/", async (req, res) => {
  // RETURN AN ARRAY WITH ALL THE STARS
  try {
    const star = await stars.find();
    res.status(200).json(star);
  } catch (error) {
    res.status(200).json([]);
  }
});

// Get Single star
router.get("/:id", async (req, res) => {
  // RETURN THE STAR OBJECT
  let { id } = req.params;
  try {
    const star = await stars.findById(id);
    res.status(200).json(star);
  } catch (error) {
    res.status(404).json({ message: `there is no star with the given ${id} ` });
  }
});

// Add star
router.post("/", async (req, res) => {
  // ADD NEW STAR TO THE DATABASE
  let starpost = req.body;
  try {
    const star = await stars.add(starpost);
    res.status(201).json({ id: star.id });
  } catch (error) {
    res
      .status(400)
      .json({ message: `request body is missing any of the required fields` });
  }
});

// Update star
router.put("/:id", async (req, res) => {
  // UPDATE THE STAR IN THE DATABASE
  let { id } = req.params;
  let changes = req.body;
  try {
    const star = await stars.update(id, changes);
    res.status(201).json({ id, ...changes });
    if (!star.hasownProperty(id)) {
      res
        .status(404)
        .json({ message: `there is no star with the given ${id}` });
    }
  } catch (error) {
    res.status(400).json({
      message: `request body is missing any of the required fields`,
    });
  }
});

// Delete star
router.delete("/:id", async (req, res) => {
  // DELETE THE STAR FROM THE DATABASE
  let { id } = req.params;
  try {
    const star = await stars.remove(id);
    res.status(200).json({ id });
  } catch (error) {
    res.status(404).json({
      message: `there is no star with the given ${id}`,
    });
  }
});

module.exports = router;
