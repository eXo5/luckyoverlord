//grab db definition for use in route handler.
//var db = require("../models");
var path = require("path");
var $ = require("jquery");
// ensure you are passing a string with queries delimited by new lines. 

module.exports = function(app) {
    var request = require('request');


    var NutritionixClient = require('nutritionix');
    var nutritionix = new NutritionixClient({
        appId: '5176df0a',
        appKey: '7461830ebf151da56366f14acd51751e'
            // debug: true, // defaults to false 
    });

    var ingredients = [
        '1 tbsp sugar',
        '1 red pepper'
    ];

    //get request "/" sends welcome.html
    app.get("/", function(req, res) {
        res.sendFile(path.resolve("public", "welcome.html"));
        //path.resolve defines that root as absolute for sendFile
    });

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
