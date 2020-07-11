const express = require("express");
const Item = require("../models/Item");
const item = express.Router();

item.post("/", (req, res) => {
  const { body } = req;
  Item.create({ ...body })
    .then((info) => {
      res.status(201).json(info);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

item.get("/:id", (req, res) => {
  const { id } = req.params;
  Item.find({ collectionId: id }, (error, data) => {
    if (error) {
      res.status(500).json({ error });
    } else {
      res.status(200).json(data);
    }
  });
});

item.delete("/:id", (req, res) => {
  const { id } = req.params;
  Item.deleteOne({ _id: id })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).json({ error, success: false });
    });
});

item.delete("/deleteCollection/:id", (req, res) => {
  const { id } = req.params;
  Item.deleteMany({ collectionId: id })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).json({ error, success: false });
    });
});

item.put("/", (req, res) => {
  const { body } = req;
  const { id } = body;
  Item.updateOne({ _id: id }, { $set: { ...body } })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).json({ error, success: false });
    });
});

module.exports = item;
