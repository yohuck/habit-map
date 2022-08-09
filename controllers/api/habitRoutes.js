const router = require("express").Router();
const { Habit, Entry } = require("../../models");
const withAuth = require("../../utils/auth");

//getting all habitData
router.get("/", withAuth, async (req, res) => {
  try {
    const habitData = await Habit.findAll({
      include: [{ model: Entry }],
    });
    res.status(200).json(habitData);
  } catch (error) {
    res.status(400).json({ message: `An ${error} has occured.` });
  }
});

//getting habitData by id
router.get("/:id", withAuth, async (req, res) => {
  try {
    const habitData = await Habit.findByPk(req.params.id);
    if (!habitData) {
      res.status(404).json({ message: "No habit with this id." });
      return;
    }
    res.status(200).json(habitData);
  } catch (error) {
    res.status(500).json({ message: `An ${error} has occured.` });
  }
});

//creating a new habit
router.post("/", withAuth, async (req, res) => {
  try {
    const newHabit = await Habit.create({
      name: req.body.name,
      description: req.body.description,
      userId: req.body.user_id,
    });
    res.status(200).json({ message: `A new habit was successfully created.` });
  } catch (error) {
    res.status(400).json({ message: `An ${error} has occured.` });
  }
});

//UPDATE route for a specific Habit id
router.put("/:id", withAuth, async (req, res) => {
  try {
    const habitData = await Habit.update(
      {
        name: req.body.name,
        description: req.body.description,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!habitData[0]) {
      res.status(404).json({ message: "No habit was found with this id." });
      return;
    }
    res.status(200).json({ message: `Habit was successfully updated.` });
  } catch (error) {
    res.status(500).json({ message: `An ${error} has occured.` });
  }
});

//DELETE route for a specific Habit id
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const habitData = await Habit.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!habitData) {
      res.status(404).json({ message: "No habit found with that id." });
      return;
    }
    res.status(200).json({ message: `Habit was successfully deleted.` });
  } catch (error) {
    res.status(500).json({ message: `An ${error} has occured.` });
  }
});

module.exports = router;
