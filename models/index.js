const User = require("./User");
const Habit = require("./Habit");
const Entry = require("./Entry");

User.hasMany(Habit, {
  onDelete: "CASCADE",
});

Habit.belongsTo(User);

Habit.hasMany(Entry);


Entry.belongsTo(Habit, {
  onDelete: "CASCADE",
});


module.exports = { User, Habit, Entry };
