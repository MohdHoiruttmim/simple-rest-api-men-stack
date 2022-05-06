const express = require("express");
const route = express.Router();
const { 
        getTask, 
        getTaskById, 
        insertTask,
        deleteTask
    } = require("../controller/taskController.js");

route.get('/task', getTask);
route.get('/task/:id', getTaskById);
route.post('/add', insertTask);
route.delete('/del/:id', deleteTask)

exports.route = route;