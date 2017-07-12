
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

    app.get("/db", function(req, res) {
        db.Meal.findAll() //query the db for everything in Meal
            .then(function(result) {
                // console.log("Result: " + result);
                var clean = JSON.parse(JSON.stringify(result))
                console.log(clean);

                res.render("index", {meal_name: result});
            })
    });//end get /db

    app.get("/:userName/:meal_name", function() {

    });

    app.post("/db", function(req, res) {
        console.log(req);
        var mealName = req.body.mealName;
        var ingred1 = req.body.ingredient1;
        var ingred2 = req.body.ingredient2;
        var ingred3 = req.body.ingredient3;
        //mealRoute will be the way we utilize dynamic routing for each recipe instance. 
        var mealRoute = req.body.mealName.toLowerCase();
        mealRoute = mealRoute.replace(/ /g, "_");
        console.log("Meal Name: " + mealName + "\n" + "Meal Route: " + mealRoute);

        db.Meal.create({ meal_name: mealName, ingredient1: ingred1, ingredient2: ingred2, ingredient3: ingred3 })
         .then(function(result) {
            console.log(result);
                res.redirect("/db");
            });
    });

    app.get("/dbTest", function(result) {

        //db.Mealres.json(result);
    })


    app.post("/newLord", function(req, res) {
        console.log(req.body);
    });

    //SEE INDEX.JS FOR FUNCTIONAL AJAX CALL.
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
