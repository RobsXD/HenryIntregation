const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const server = express();
const router = require("../routes/index");


server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

module.exports = server;
