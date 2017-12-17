var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.render("index");
    })

    app.get("/survey", function(req, res) {
        res.render("survey");
    })

};