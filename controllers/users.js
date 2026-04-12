const User = require("../models/user");

// GET /users
const getUsers = (req, res) => {
  User.find()
    .then((users) => res.send(users))
    .catch(() =>
      res.status(500).send({
        message: "An error has occurred on the server.",
      })
    );
};

// GET /users/:userId
const getUserById = (req, res) => {
  const { userId } = req.params;

  User.findById(userId)
    .orFail()
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === "CastError") {
        return res.status(400).send({ message: "Invalid user id" });
      }
      if (err.name === "DocumentNotFoundError") {
        return res.status(404).send({ message: "User not found" });
      }
      return res.status(500).send({
        message: "An error has occurred on the server.",
      });
    });
};

// POST /users
const createUser = (req, res) => {
  const { name, avatar } = req.body;

  User.create({ name, avatar })
    .then((user) => res.status(201).send(user))
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res.status(400).send({ message: "Invalid data" });
      }
      return res.status(500).send({
        message: "An error has occurred on the server.",
      });
    });
};

module.exports = { getUsers, getUserById, createUser };