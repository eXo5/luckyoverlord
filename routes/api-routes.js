
var db = require("../models");

module.exports = function(app) {

var mealTables = require("../models/mealTables")


// ////CREATE NEW USER
// 		app.post("/", function(req, res){
// 			db.User.create({
// 				username: req.body.[username]////(or what ever the form input is called)
// 				password: req.body.[password] ////(or what ever the form input is called)
// 			}).then(function(data){
// 				res.redirect("[user homepage]")
// 			});	
// 		});


// // /////LOGIN AS USER
	
// 	app.get("/[homepage]/:user", function(req, res){
// 			db.User.findOne({
// 				where: {
// 					userName: req.params.username
// 				}
// 			}).then(function(data){
// 				var hbsObject = {
// 					user: data
// 				}
// 				res.render("user homepage", hbsObject)
// 	});
// });


// /////CREATE NEW RECIPIE

	app.post("/", function(req, res){
				db.Meal.create({
					meal_name: req.body.mealName,					
					ingredient1: req.body.ing1
					// ingredient2: req.body.[ingredient2]
					// ingredient3: req.body.[ingredient3]
					// ingredient4: req.body.[ingredient4]
					// ingredient5: req.body.[ingredient5]
					// ingredient6: req.body.[ingredient6]
					// ingredient7: req.body.[ingredient7]
					// ingredient8: req.body.[ingredient8]
					// ingredient9: req.body.[ingredient9]
					// ingredient10: req.body.[ingredient10]
				}).then(function(data){
					// var hbsObject = {
					// 	meals: data
					// }
					// res.render("index", hbsObject);
					res.end()
				});
		};

////DISPLAY ALL MEALS
// 	app.get("/", function(req, res){
// 		db.Meal.findAll({}).then(function(data){
// 			var hbsObject = {
// 				meals: data
// 			};
// 			res.render("/", hbsObject)	
// 		})
// });


////DISPLAY ONE USERS MEALS

	// app.get("[user homepage]", function(req,res){
	// 	db.Meal.findAll({}).then(function(data){
	// 		var hbsObject = {
	// 			meals: data
	// 		}
	// 	});

	// });
	





















