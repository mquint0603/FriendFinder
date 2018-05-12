var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")

// require("./routes/apiRoutes")(app);
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var htmlRoutes = require("./app/routing/htmlRoutes")(app);
var apiRoutes = require("./app/routing/apiRoutes")(app)




app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  