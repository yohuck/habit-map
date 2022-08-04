const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const entryRoute = require("./entryRoute");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/", entryRoute);

module.exports = router;
