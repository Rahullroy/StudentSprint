const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();
const PORT = 5550;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use(express.static("public"));

let tasks =[];

app.get('/',(req,res)=>{
    res.render("index",{tasks:tasks});
});

app.post('/add-task',(req,res)=>{
    const task = req.body.task;

    if (task && task.trim() !== "") {
        tasks.push(task);
    }

    return res.redirect('/');

})






app.listen(PORT , ( )  => {
    console.log("server running on port",{PORT});
})


