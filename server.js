// DEPENDENCIES

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
 
//EXPRESS CONFIG

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res) {
    res.setHeader("Content-Type", "text/plain")
    res.write("you posted:\n")
    res.end(JSON.stringify(req.body, null, 2))
});

//ROUTER

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//LISTENER

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT)
});
