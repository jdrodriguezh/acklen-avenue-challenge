const express = require("express");
const Collection = require("../models/Collection");
const collection = express.Router();

collection.post("/", (req, res) => {
  const { body } = req;
  Collection.create({ ...body })
    .then((info) => {
      res.status(201).json(info);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

collection.get("/:id", (req, res) => {
  const { id } = req.params;
  Collection.find({ user: id }, (error, data) => {
    if (error) {
      res.status(500).json({ error });
    } else {
      res.status(200).json(data);
    }
  });
});

collection.delete("/:id", (req, res) => {
  const { id } = req.params;
  Collection.deleteOne({ _id: id })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).json({ error, success: false });
    });
});

module.exports = collection;
