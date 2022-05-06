const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const taskRoute = require("./routes/taskRoute.js")

const app = express();
mongoose.connect(
  "mongodb://127.0.0.1:27017/todolist",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", (err) => console.log(err));

db.once("open", () => console.log("Connected to MongoDB"));

app.use(cors());
app.use(express.json());
app.use(taskRoute)

app.listen(5000, () => {
  console.log(`server is running on http://localhost:5000`);
});
