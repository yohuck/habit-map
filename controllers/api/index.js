const router = require("express").Router();
const userRoutes = require("./userRoutes");
const habitRoutes = require("./habitRoutes");

router.use("/users", userRoutes);
router.use("/habits", habitRoutes);

module.exports = router;
