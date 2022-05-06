const task = require('../models/taskModels.js');

// export const getTask = async (req, res) => {
//     const listTask = await task.model.find();
//     if (err) throw res.status(500).json({message: err});
//     res.json(listTask)
// }

const getTask = async (req, res) => {
    try{
        const listTask = await task.model.find();
        res.json(listTask)
    } catch(err){
        res.status(500).json({message: err.message})
    }
}

exports.getTask = getTask;