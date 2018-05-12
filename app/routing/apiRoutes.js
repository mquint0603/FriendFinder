var path = require("path");
var friendData = require("../data/friends")

// console.log(friendData)


module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    // If no matching route is found default to home
    app.post("/api/friends", function(req, res) {
        friendData.push(req.body);
        res.json(true);
    });
}