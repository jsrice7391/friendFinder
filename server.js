const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const exphb = require("express-handlebars");

var PORT = process.env.PORT | 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/assets", express.static("assets"));

app.engine("handlebars", exphb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// require("./routes/appRoutes")(app);
require("./routes/htmlroutes")(app);


app.listen(PORT, function() {
    console.log("APP is listening on Port: " + PORT);

});