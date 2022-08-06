const User = require("./User");
const Habit = require("./Habit");
const Entry = require("./Entry");

User.hasMany(Habit, {
  foreignKey: "habit_id",
  onDelete: "CASCADE",
});

Habit.belongsTo(User, {
  foreignKey: "habit_id",
});

module.exports = { User, Habit };
