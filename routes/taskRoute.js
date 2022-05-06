const express = require("express");
const route = express.Router();
const { getTask, getTaskById, insertTask } = require("../controller/taskController.js");

route.get('/task', getTask);
route.get('/task/:id', getTaskById);
route.post('/add', insertTask);

exports.route = route;