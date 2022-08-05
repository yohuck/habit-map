const sequelize = require("../config/connection");
const { User } = require("../models");

const userData = require("./userData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log("All models were synchronized successfully.");

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
