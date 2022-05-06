const mongoose = require("mongoose");

const createTask = mongoose.Schema({
    list:{
        type:String,
        required:true
    }
})

export default mongoose.model('createTask', User);