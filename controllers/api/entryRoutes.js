const router = require("express").Router();
const { Entry } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const entryData = await Entry.findAll(req.body);
    res.status(200).json(entryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

router.post("/", (req, res) => {
  Entry.create(req.body)
    .then((newEntry) => {
      res.json(newEntry);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
