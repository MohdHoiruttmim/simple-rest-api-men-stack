const express = require("express");
const route = express.Router();
const { 
        getTask, 
        getTaskById, 
        insertTask,
        deleteTask,
        editTask
    } = require("../controller/taskController.js");

route.get('/task', getTask);
route.get('/task/:id', getTaskById);
route.post('/add', insertTask);
route.delete('/del/:id', deleteTask);
route.patch('/update/:id', editTask)

exports.route = route;