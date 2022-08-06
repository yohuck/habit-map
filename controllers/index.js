const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const entryRoutes = require("./api/entryRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/entries", entryRoutes);

module.exports = router;
