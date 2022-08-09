const router = require("express").Router();
const { BOOLEAN, DataTypes } = require("sequelize");
const { Entry } = require("../../models");

//  Get all entries
router.get("/", async (req, res) => {
  try {
    const entryData = await Entry.findAll(req.body);
    res.status(200).json(entryData);
  } catch (error) {
    res.status(400).json({ message: `An ${error} has occured.` });
  }
});

//  Get an entry by ID
router.get("/:id", async (req, res) => {
  try {
    const entryData = await Entry.findByPk(req.params.id);
    if (!entryData) {
      res.status(404).json({ message: "No entry with this id." });
      return;
    }
    res.status(200).json(entryData);
  } catch (error) {
    res.status(500).json({ message: `An ${error} has occured.` });
  }
});

//  Add an entry
router.post("/", async (req, res) => {
  try {
    const newEntry = await Entry.create({
      date: req.body.date,
      completed: req.body.completed,
      habitId: req.body.habitId,
    });
    res.status(200).json({ message: `A new entry was completed.` });
  } catch (error) {
    res.status(400).json({ message: `An ${error} has occurred.` });
  }
  //   .then((newEntry) => {
  //     res.json(newEntry);
  //   })
  //   .catch((err) => {
  //     res.json(err);
  //   });
});

//  Update an entry for a specific ID
router.put("/:id", async (req, res) => {
  try {
    const entryData = await Entry.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!entryData[0]) {
      res.status(404).json({
        message: "There is no entry that matches that ID!  Please try again.",
      });
      return;
    }
    res.status(200).json({ message: `Entry successfully updated.` });
  } catch (error) {
    res.status(500).json({ message: `An ${error} has occured.` });
  }
});

//  Delete an entry
router.delete("/:id", async (req, res) => {
  try {
    const entryData = await Entry.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!entryData) {
      res.status(404).json({ message: "No entry with this id!" });
      return;
    }
    res.status(200).json({ message: `Entry successfully deleted.` });
  } catch (error) {
    res.status(500).json({ message: `An ${error} has occurred.` });
  }
});

module.exports = router;
