var express = require("express");
var app = express();

app.use(express.static(__dirname + "/build"));

/*Serve the index.html file*/
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
    /*res.json({
     message: "working"
     });*/
});



/*Define server routes here*/




/*404 catchall*/
app.use("/", function(req, res) {
    res.json({
        message: "Server 404 page"
    })
});


var port = 8080;
app.listen(port);
console.log("Server is listening on port: " + port);