const {
  find,
  findById,
  createUser,
  updateUser,
  deleteUser
} = require("./helper");

const data = {
  users: [
    {
      id: 1,
      name: "John Finley",
      age: 23
    },
    {
      id: 2,
      name: "Mary Sullen",
      age: 27
    },
    {
      id: 3,
      name: "Mark Pollack",
      age: 31
    },
    {
      id: 4,
      name: "McKenzie Combs",
      age: 21
    }
  ]
};

test("find all users", () => {
  expect(find).toEqual([
    {
      id: 1,
      name: "John Finley",
      age: 23
    },
    {
      id: 2,
      name: "Mary Sullen",
      age: 27
    },
    {
      id: 3,
      name: "Mark Pollack",
      age: 31
    },
    {
      id: 4,
      name: "McKenzie Combs",
      age: 21
    }
  ]);
});

test("finds one object given an id", () => {
  expect(findById(1)).toEqual({
    id: 1,
    name: "John Finley",
    age: 23
  });
});

test("adds a new user", () => {
  const sally = {
    id: 7,
    name: "Sally Jefferson",
    age: 48
  };
  createUser(sally);
  expect(data.users).toContain(sally);
});

test("delete a user", () => {
  const id = 7;
  deleteUser(id);
  expect(data.users).toEqual([
    {
      id: 1,
      name: "John Finley",
      age: 23
    },
    {
      id: 2,
      name: "Mary Sullen",
      age: 27
    },
    {
      id: 3,
      name: "Mark Pollack",
      age: 31
    },
    {
      id: 4,
      name: "McKenzie Combs",
      age: 21
    }
  ]);
});
