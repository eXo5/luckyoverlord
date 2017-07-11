//grab db definition for use in route handler.
//var db = require("../models");
var path = require("path");

 
var db = require("../models");
module.exports = function(app) {
    var request = require('request');
var hbsObject;
    //get request "/" sends welcome.html
    app.get("/", function(req, res) {
        res.sendFile(path.resolve("public", "welcome.html"));
        //path.resolve defines that root as absolute for sendFile
    });
    
    app.get("/db", function(req, res){
    	db.Meal.findAll()//query the db for everything in Meal
    		.then(function(result){
    			console.log("Result: " + result);
    		var mealInfo_name = result[0].dataValues.meal_name;//get meal_name + ingredients
    		var mealInfo_ingredOne = result[0].dataValues.ingredient1;
    		var mealInfo_ingredTwo = result[0].dataValues.ingredient2;
    		var mealInfo_ingredThree = result[0].dataValues.ingredient3;
    	res.render("index", {words: mealInfo_name, words1: mealInfo_ingredOne, words2: mealInfo_ingredTwo, words3: mealInfo_ingredThree} );
    	
					//all of this was copied and pasted from below. I haven't ran the DB query into the nutritionix yet.    			
    			// request("https://api.nutritionix.com/v1_1/search/" + food + "?results=0%3A20&cal_min=125&cal_max=50000&fields=*&appId=5176df0a&appKey=+7461830ebf151da56366f14acd51751e", function(error, response, body) {
       //      console.log('error:', error); // Print the error if one occurred 
       //      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
       //      console.log('body:', body); // Print the HTML for the Google homepage. 
       //      console.log("nf_calories: " + body)
       //      var parseBody = JSON.parse(body);
       //      res.send(parseBody.hits[0].fields);
       //  });
    		})
    	
    });

    app.post("/db", function(req, res){
    	db.Meal.create({meal_name: "Mom's Spaghetti", ingredient1: "Pasta", ingredient2: "Red Sauce", ingredient3: "Meatballs" })
    	.then(function(result){
    	res.redirect("/db");
    		});
    	});

    app.get("/dbTest", function(result){
    		
    		//db.Mealres.json(result);
    })
    

    app.post("/newLord", function(req, res) {
        console.log(req.body);
    });

    app.post("/food", function(req, res) {
        var food = req.body.ingredient;
        console.log("Food Search: " + food);
        request("https://api.nutritionix.com/v1_1/search/" + food + "?results=0%3A20&cal_min=125&cal_max=50000&fields=*&appId=5176df0a&appKey=+7461830ebf151da56366f14acd51751e", function(error, response, body) {
            console.log('error:', error); // Print the error if one occurred 
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
            console.log('body:', body); // Print the HTML for the Google homepage. 
            console.log("nf_calories: " + body)
            var parseBody = JSON.parse(body);
            res.send(parseBody.hits[0].fields);


        });
    })

}
