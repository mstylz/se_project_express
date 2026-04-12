const ClothingItem = require("../models/clothingItem");

// CREATE ITEM
const createItem = (req, res) => {
  const { name, weather, imageUrl } = req.body;

  ClothingItem.create({
    name,
    weather,
    imageUrl,
    owner: req.user._id,
  })
    .then((item) => res.status(201).send(item))
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res.status(400).send({ message: "Invalid data" });
      }
      return res.status(500).send({ message: "An error has occurred on the server." });
    });
};

// GET ITEMS
const getItems = (req, res) => {
  ClothingItem.find()
    .then((items) => res.send(items))
    .catch(() => res.status(500).send({ message: "An error has occurred on the server." }));
};

// DELETE ITEM
const deleteItem = (req, res) => {
  const { itemId } = req.params;

  ClothingItem.findByIdAndDelete(itemId)
    .orFail()
    .then((item) => res.send(item))
    .catch((err) => {
      if (err.name === "CastError") {
        return res.status(400).send({ message: "Invalid item id" });
      }
      if (err.name === "DocumentNotFoundError") {
        return res.status(404).send({ message: "Item not found" });
      }
      return res.status(500).send({ message: "An error has occurred on the server." });
    });
};

// LIKE ITEM
const likeItem = (req, res) => {
  const { itemId } = req.params;

  ClothingItem.findByIdAndUpdate(
    itemId, { $addToSet: { likes: req.user._id } }, { new: true }
  )
    .orFail()
    .then((item) => res.send(item))
    .catch((err) => {
      if (err.name === "CastError") {
        return res.status(400).send({ message: "Invalid item id" });
      }
      if (err.name === "DocumentNotFoundError") {
        return res.status(404).send({ message: "Item not found" });
      }
      return res.status(500).send({ message: "An error has occurred on the server." });
    });
};

// DISLIKE ITEM
const dislikeItem = (req, res) => {
  const { itemId } = req.params;

  ClothingItem.findByIdAndUpdate(
    itemId, { $pull: { likes: req.user._id } }, { new: true }
  )
    .orFail()
    .then((item) => res.send(item))
    .catch((err) => {
      if (err.name === "CastError") {
        return res.status(400).send({ message: "Invalid item id" });
      }
      if (err.name === "DocumentNotFoundError") {
        return res.status(404).send({ message: "Item not found" });
      }
      return res.status(500).send({ message: "An error has occurred on the server." });
    });
};

module.exports = {
  createItem,
  getItems,
  deleteItem,
  likeItem,
  dislikeItem,
};