const express = require("express");
const route = express.Router();
const { getTask } = require("../controller/taskController.js");

route.get('/task', getTask);

export default route;