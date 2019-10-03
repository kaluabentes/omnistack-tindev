const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const server = express();

mongoose.connect(
  "mongodb+srv://kalu:kalu@cluster0-fgh3x.mongodb.net/admin?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

server.use(express.json());
server.use(routes);

server.listen(3333);
