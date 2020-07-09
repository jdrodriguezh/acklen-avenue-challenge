const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const body = require("body-parser");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const PORT = 8080;

const app = express();

mongoose.connect("mongodb://159.89.156.23:27017/acklen",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
},(error) => {
  console.log(error ? `Error detected: ${error}`:`No errors detected in MongoDB`);
});

app.use(cors());
app.use(body.urlencoded({extended: true}));
app.use(body.json());
app.use(helmet());

if(!fs.existsSync(path.join(__dirname,"logs"))){
  fs.mkdirSync(path.join(__dirname, "logs"));
}
const date = new Date();
const accessLogStream = fs.createWriteStream(
  path.join(__dirname,"logs",`${date.toLocaleDateString().replace(/\//g,"-")}.log`),
  {
    flags: "a",
  }
);
app.use(morgan("tiny",{stream: accessLogStream}));
app.listen(PORT, () => {
  console.log(`Back-end running on PORT: ${PORT}`)
});