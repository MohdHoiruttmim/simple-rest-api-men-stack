const mongoose = require("mongoose");

// TESTING CONNECTION WITH DB
// mongoose.connect(
//     "mongodb://127.0.0.1:27017/todolist",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   );

// const Task = mongoose.model('Task', {
//     list:{
//         type: String,
//         required: true
//     }
// })

// const insertTask = new Task({
//     list:"Belajar NodeJS"
// })

// insertTask.save().then(() => {
//     console.log("berhasil")
// }).catch((err) => {
//     console.log(err)
// })
// END TESTING SECTION

const Task = mongoose.Schema({
    task: {
        type: String,
        required: true
    }
});

const model = mongoose.model('taks', Task)

exports.model = model