var path = require("path");

var users = [{
    "name": "Ahmed",
    "photo": "https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg",
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

    app.get("/all-friends", function(req, res) {
        res.render("all-users", { users: users });
    })

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