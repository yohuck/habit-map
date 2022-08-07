const router = require("express").Router();
const { User, Habit, Entry } = require("../../models");
const withAuth = require("../../utils/auth");

//getting all userData
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [{ model: Habit, include: [{ model: Entry }] }],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//getting userData by id
router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: "No user with this id!" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//creating a new user
router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
    });

    // Set up sessions with a 'loggedIn' variable set to `true`
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.email = userData.email;
      req.body.first_name = userData.first_name;
      req.body.last_name = userData.last_name;
      req.body.password = userData.password;
      req.session.loggedIn = true;

      res.status(200).json({
        user: userData,
        message: "New user created. You are now logged in!",
      });
    });
  } catch (error) {
    res.status(400).json({ message: `An ${error} has occured.` });
  }
});

//user LOGIN the app with email & password
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    // validating the password
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    // Once the user successfully logs in, set up the sessions variable 'loggedIn'
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.email = userData.email;
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: userData, message: "You are now logged in!" });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `An ${error} has occured.` });
  }
});

// Logout
router.post("/logout", (req, res) => {
  // When the user logs out, destroy the session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//DELETE route for a specific user id
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!userData) {
      res.status(404).json({ message: "No user found with that id." });
      return;
    }
    res.status(200).json(`User was successfully deleted.`);
  } catch (error) {
    res.status(500).json({ message: `An ${error} has occured.` });
  }
});

module.exports = router;
