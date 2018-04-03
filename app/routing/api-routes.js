var friends = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
    
        var difference = 0;
        var match = {name: "", photo: ""};

        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;

            for (var j = 0; j < friends[i].scores.length; j++) {
                totalDifference += Math.abs(req.body.scores[j] - friends[i].scores[j]);
            };

            if (i == 0 || totalDifference < difference) {
                difference = totalDifference;
                match.name = friends[i].name;
                match.photo = friends[i].photo;
            };
        };

        friends.push(req.body);
        res.json(match);
    });
};