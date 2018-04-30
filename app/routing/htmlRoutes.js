//dependencies:

var path = require("path");

//routing, takes user to survey if specified, home if not

module.exports = function(app) {
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/survey.html"));

    });

    app.use(function(req,res){
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

}