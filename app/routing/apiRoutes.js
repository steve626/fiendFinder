var friendArray = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friendArray", function (req, res){
        res.json(friendArray);
    });
    app.post("/api/friendArray", function(req, res){
        
        var bestFriend = {
            name: "",
            photo: "",
            scoreDiff: 1000
        };

        var userData = req.body;
        var userName = userData.name;
        var userPhoto = userData.photo;
        var userScores = userData.scores;

        var totalDiff = 0;

        for (var i = 0; i < friendArray.length; i++) {

            console.log("24: " + friendArray[i].name);
            console.log("25: " + userName);
            

            totalDiff = 0;

            for (var j = 0; j < friendArray[i].scores[j]; j++) {

                totalDiff  += Math.abs((userScores[j]) - (friendArray[i].scores[j]));
                // console.log("uscores1: " + userScores);
                // console.log("uscores2: " + userScores[j]);
                // console.log("fscores2: " + friendArray[i].scores);
                // console.log("fscores2: " + friendArray[i].scores[j]);
                // console.log("TD: " + totalDiff);

                if (totalDiff <= bestFriend.scoreDiff){

                    bestFriend.name = friendArray[i].name;
                    bestFriend.photo = friendArray[i].photo;
                    bestFriend.scoreDiff = totalDiff;
                }

            }

        }

        friendArray.push(userData);
        console.log("44: "+ userData.name);
        


        res.json(bestFriend);
        console.log("49: " + bestFriend.name);

    });



}