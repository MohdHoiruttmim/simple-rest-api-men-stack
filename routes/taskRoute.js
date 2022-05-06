const express = require("express");
const route = express.Router();
const { getTask, getTaskById } = require("../controller/taskController.js");

route.get('/task', getTask);
route.get('/task/:id', getTaskById);

exports.route = route;