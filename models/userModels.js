const mongoose = require("mongoose");

const Task = mongoose.Schema({
    list:{
        type:String,
        required:true
    }
})

export default mongoose.model('Task', User);