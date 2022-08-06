const router = require("express").Router();
const { Entry } = require("../../models/");

router.get("/", async (req, res) => {
  try {
    const entryData = await Entry.findAll(req.body);
    res.status(200).json(habitData);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
