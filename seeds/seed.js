const sequelize = require("../config/connection");
const { User, Habit, Entry } = require("../models");

const userData = require("./userData.json");
const habitData = require("./habitData.json");
const entryData = require("./entryData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log("All models were synchronized successfully.");

  const user = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const habits = await Habit.bulkCreate(habitData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
