const sequelize = require("../config/connection");
const { User, Habit } = require("../models");

const userData = require("./userData.json");
const habitData = require("./habitData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log("All models were synchronized successfully.");

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });


  await Habit.bulkCreate(habitData, {
    returning: true,
  });

  process.exit(0);

};

seedDatabase();
