const data = require("./user");

function find() {
  return data.users;
}

function findById(id) {
  return data.users.find((user) => user.userId === Number(id));
}

function createUser(user) {
  data.users.push(user);
}

function updateUser(id, userFields) {
  var user = findById(id);
  var updatedUser = { ...user, userFields };
  return { ...data.users, updatedUser };
}

function deleteUser(id) {
  return data.users.filter((user) => user.userId !== id);
}

module.exports = {
  find,
  findById,
  createUser,
  updateUser,
  deleteUser
};
