const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
=

app.get("/" , function(req , res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/" ,function(req , res){
   let first= Number(req.body.first) ;
   let second = Number(req.body.second);
   let sum = first + second;
   
   res.send("The sum of first and second number is " +sum )
});

app.listen(3000 , function() {
    console.log("You server is running at port 3000");
})


// my weather api key = 22e10da41f029338a2676f10180fd15a
