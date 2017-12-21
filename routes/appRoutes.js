var path = require("path");

var users = [{
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "answers": [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ],
    score: 32
}];


module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(users);
    })

    app.post("/api/friends", function(req, res) {
        num_array = []
        theAnswers = req.body.answers.split("");
        for (let number in theAnswers) {
            num_array.push(parseInt(theAnswers[number]))
        }

        users.push({
            name: req.body.name,
            photo: req.body.photo,
            answers: num_array,
            score: parseInt(req.body.score)
        })
    })


}