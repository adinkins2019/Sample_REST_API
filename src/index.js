const express = require("express");
const PORT = 3000;
const app = express();
const chalk = require("chalk");
const {
  find,
  findById,
  createUser,
  updateUser,
  deleteUser
} = require("./helper");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  const users = find;
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const user = findById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found.");
  }
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  createUser(newUser);
  res.send("User created");
});

app.put("/users/:id", (req, res) => {
  const user = findById(req.params.id);
  const { id } = req.params;
  if (user) {
    updateUser(id, req.body);
  } else {
    res.status(404).send("User not found");
  }
});

app.delete("/users/:id", (req, res) => {
  const user = findById(req.params.id);
  const { id } = req.params;
  if (user) {
    deleteUser(id, req.body);
  } else {
    res.status(404).send("User not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT${chalk.blue(PORT)}`);
});
