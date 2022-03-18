const mongoose = require("mongoose");

const Todoschema = new mongoose.Schema({
    tasks: String
});

module.exports=new mongoose.model("Task", Todoschema);
