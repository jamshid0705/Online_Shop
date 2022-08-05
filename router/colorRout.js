const express = require("express");
const Rout = express.Router();
const colorController = require("../controller/colorController");

Rout.route("/").get(colorController.getAll).post(colorController.add);

module.exports = Rout;
