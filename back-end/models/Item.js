const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name:{
    type: String,
  },
  description:{
    type: String,
  },
  condition:{
    type: String,
  },
  location:{
    type: String,
  },
  year:{
    type: Number,
  },
  dateCreated:{
    type: Date,
  }
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;