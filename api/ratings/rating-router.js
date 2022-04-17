require("dotenv").config();
const express = require("express");

// You will need `rating-model.js`
const rating = require("./rating-model.js");
// The middleware functions also need to be required

const router = express.Router();

router.get("/", async (req, res) => {
  // RETURN AN ARRAY WITH ALL THE RATINGS
  try {
    const rate = await rating.find();
    res.status(200).json(rate);
    if(!rate){
      res.status(200).json([]);
    }
  } catch (error) {
    res.status(404).json({ message: `get ratings faild ${error}` });
  }
});

// Get Single rating
router.get("/:id", async (req, res) => {
  // RETURN THE RATING OBJECT
  let id  = Number(req.params.id);
  try {
    const rate = await rating.findById(id);
    console.log(JSON.stringify(rate));
    res.status(200).json(rate);
  } catch (error) {
    res.status(400).json({
      message: ` request body is missing any of the required fields ${error}`,
    });
  }
});

// Add rating
router.post("/", async (req, res) => {
  // ADD NEW RATING TO THE DATABASE
  let rate = req.body;
  console.log(rate);
  try {
    const addRating = await rating.add(rate);
    res.status(201).json({ ...addRating });
  } catch (error) {
    res.status(400).json({
      message: `request body is missing any of the required fields ${error}`,
    });
  }
});

// Update rating
router.put("/:id", async (req, res) => {
  // UPDATE THE RATING IN THE DATABASE
  let  id  = Number(req.params.id);
  let changes = req.body;
  console.log(id);
  try {
    const rate = await rating.update(id,changes);
    res.status(200).json({id});
    if (!id) {
      res.status(404).json({ message: `not found rating give id` });
    }
  } catch (error) {
    res
      .status(400)
      .json({
        message: `request body is missing any of the required fields ${error}`,
      });
  }
});

// Delete rating
router.delete("/:id", async (req, res) => {
  // DELETE THE RATING FROM THE DATABASE
  let id  = Number(req.params.id);
  try {
    const rate = await rating.remove(id);
    res.status(200).json({ id });
  } catch (error) {
    res.status(404).json({ message: `not found rating` });
  }
});

module.exports = router;
