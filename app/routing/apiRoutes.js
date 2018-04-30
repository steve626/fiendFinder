var friendArray = require("../data/friends.js");

module.exports = function (app) {
    app.get('/api/friends', function (req, res){
        res.json(friendArray);
    });
    app.post("/api/friends", function(req, res){
        
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

        for (var i = 0; i < friends.length; i++) {

            console.log(friends[i].name);

            totalDiff = 0;

            for (var j = 0; j < friends[i].scores[j]; j++) {

                totalDiff  += Math.abs(pareseInt(userScores[j]) - pareseInt(friends[i].scores[j]));

                if (totalDiff <= bestFriend.scoreDiff){

                    bestFriend.name = friends[i].name;
                    bestFriend.photo = friends[i].photo;
                    bestFriend.scoreDiff = totalDiff;
                }

            }

        }

        friends.push(userData);

        res.json(bestFriend);

    });



}