const router = require("express").Router();

const Todo = require("../models/Todo");

router.post("/add/todo",function(req, res){
    const todo = req.body.todo;
    console.log(todo);
    const newTodo = new Todo({tasks: todo});

    newTodo.save()
    .then(()=>{
        console.log("successfully added");
        res.redirect("/");
    })
    .catch((err)=>console.log(err));
})
.get("/delete/todo/:_id", (req, res)=>{
    const {_id }= req.params;
    Todo.deleteOne({_id})
    .then(()=>{
        console.log("deleted todo");
        res.redirect("/");
    })
    .catch((err)=>console.log(err));
})
module.exports = router;
