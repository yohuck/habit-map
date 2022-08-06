const router = require("express").Router();
const userRoutes = require("./userRoutes");
const habitRoutes = require("./habitRoutes");
const entryRoutes = require("./entryRoutes");

router.use("/users", userRoutes);
router.use("/habits", habitRoutes);
router.use("/entries", entryRoutes);

module.exports = router;
