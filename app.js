var express = require("express");
var app = express();
app.use(express.static(__dirname + "/public"));

app.get("/", function(req,res){
    res.render("pattap.ejs");
});

app.listen(process.env.PORT, process.env.IP);