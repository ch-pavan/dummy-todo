const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/todolist", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({
    extended: true
 }));
 
app.use(express.static(__dirname + '/views'));

app.set("view engine", "ejs");


app.use(require("./routes/index"));
app.use(require("./routes/todo"));
  
app.listen(3000, function(){
    console.log("server started listening on port 3000");
})
