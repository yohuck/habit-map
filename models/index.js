const User = require("./User");
const Habit = require("./Habit");
const Entry = require("./Entry");

User.hasMany(Habit, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Habit.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Habit, Entry };
