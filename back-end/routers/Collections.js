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

collection.get("/", (req, res) => {
  Collection.find({},(error, data)=>{
    if(error){
      res.status(500).json({error});
    }else{
      res.status(200).json(data);
    }
  });
});