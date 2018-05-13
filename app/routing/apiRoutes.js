var path = require("path");
var friendData = require("../data/friends")

// console.log(friendData)


module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });


    app.post("/api/friends", function(req, res) {
        
        
        //compare scores with all objects in the friend data array -------------------------------------
        compatibilityScores = []

        for (k=0; k< friendData.length; k++){
            let compatScore = 0
            for (i = 0; i < req.body.scores.length; i++){
                compatScore += Math.abs(parseInt(friendData[k].scores[i]) - parseInt(req.body.scores[i]))
            }
            console.log(compatScore)
            compatibilityScores.push(compatScore)
            // incrementer++
        }
        console.log(compatibilityScores)

        
        // find the postion of the most compatible friend in the friend data array _____________________________
        var lowest = 0;
        for (let j = 1; j < compatibilityScores.length; j++) {
             if (compatibilityScores[j] < compatibilityScores[lowest]) lowest = j;
        }
        console.log(lowest + " position of most compatible")


        friendData.push(req.body);
        res.json(friendData[lowest]);
    });
}