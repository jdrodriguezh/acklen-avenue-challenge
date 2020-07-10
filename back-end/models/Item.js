const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  condition:{
    type: String,
    required: true,
  },
  location:{
    type: String,
    required: true,
  },
  year:{
    type: Number,
    required: true,
  },
  dateCreated:{
    type: Date,
    required: true,
  }
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;