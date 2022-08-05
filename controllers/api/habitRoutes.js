const router = require("express").Router();
const { Habit } = require("../../models");

//getting all habitData
router.get("/", async (req, res) => {
  try {
    const habitData = await Habit.findAll(req.body);
    res.status(200).json(habitData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//getting habitData by id
router.get("/:id", async (req, res) => {
  try {
    const habitData = await Habit.findByPk(req.params.id);
    if (!habitData) {
      res.status(404).json({ message: "No habit with this id!" });
      return;
    }
    res.status(200).json(habitData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//creating a new habit
router.post("/", async (req, res) => {
  try {
    const newHabit = await Habit.create(req.body);
    res.status(200).json(newHabit);
  } catch (err) {
    res.status(400).json(err);
  }
});

//need to create the put and delete routes
module.exports = router;
