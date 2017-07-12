//Dependencies and definitions
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");

var app = express();
	app.use(methodOverride("_method"));
	app.use(bodyParser.urlencoded({ extended: false}));
	app.use(bodyParser.text());
	app.use(bodyParser.json({ type:"application./vnd.api+json"}));

var exphbs = require("express-handlebars");
	app.use(express.static("public"));
	app.engine("handlebars", exphbs({defaultLayout: "main"}));
	app.set("view engine", "handlebars");	

var db = require("./models");


var PORT = process.env.PORT || 3000;

var db = require("./models");
require("./routes/api-routes.js")(app);
//require("./routes/html-routes.js")(app);


//Sync database, then start server.
db.sequelize.sync({}).then(function() {
	app.listen(PORT, function(){
		console.log("Welcome to Machine " + PORT);
	});
});