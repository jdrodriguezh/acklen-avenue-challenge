const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema({
  name:{
    type:String,
  },
  description:{
    type:String,
  },
  creationDate:{
    type:Date,
  },
});

const Collection = mongoose.model("Collection", collectionSchema);
module.exports = Collection;