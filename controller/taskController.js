const task = require('../models/taskModels.js');

// export const getTask = async (req, res) => {
//     const listTask = await task.model.find();
//     if (err) throw res.status(500).json({message: err});
//     res.json(listTask)
// }

exports.getTask = async (req, res) => {
    try{
        const listTask = await task.model.find();
        res.json(listTask)
    } catch(err){
        res.status(500).json({message: err.message})
    }
}

exports.getTaskById = async (req, res) => {
    try{
        const listTask = await task.model.findById(req.params.id);
        res.json(listTask)
    } catch(err){
        res.status(500).json({message: err.message})
    }
}

exports.insertTask = async (req, res) => {
    const insertTask = new task.model(req.body)
    try{
        const insertedUser = await insertTask.save();
        res.status(201).json(insertedUser)
    } catch(err){
        res.status(400).json({message: err.message})
    }
}

exports.deleteTask = async (req, res) => {
    try{
        const deletedTask = await task.model.deleteOne({_id:req.params.id});
        res.status(200).json(deletedTask)
    } catch(err){
        res.status(400).json({message: err.message})
    }
}
// exports.getTask = getTask;
