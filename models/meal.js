

	module.exports = function(sequelize, DataTypes) {

		var Meal = sequelize.define("Meal", {
			meal_name: {
				type: DataTypes.STRING,
				allowNull: false
			},
			ingredient1: {
				type: DataTypes.STRING	
			},
			ingredient2: {
				type: DataTypes.STRING	
			},
			ingredient3: {
				type: DataTypes.STRING	
			},
			ingredient4: {
				type: DataTypes.STRING	
			},
			ingredient5: {
				type: DataTypes.STRING	
			},
			ingredient6: {
				type: DataTypes.STRING	
			},
			ingredient7: {
				type: DataTypes.STRING	
			},
			ingredient8: {
				type: DataTypes.STRING	
			},
			ingredient9: {
				type: DataTypes.STRING	
			},
			ingredient10: {
				type: DataTypes.STRING	
			},
			calories: {
				type: DataTypes.INTEGER
			},
			fat: {
				type: DataTypes.INTEGER
			},
			protein:{
				type: DataTypes.INTEGER
			},
			carbs:{
				type: DataTypes.INTEGER
			}
			},{
				classMethods: {
			        associate: function(models) {
					Meal.belongsTo(models.User, {
	           			 onDelete: "cascade"
	          });
	        }
				},
				timestamps: false
			
		});
		return Meal
	};



	////TO MAKE NEW RECIPIE TABLE ----> IN THE ROUTES ON 
	////FORM SUBMIT
	// Recipie.create() 
// var recipie  = require("./meals")

// 	var mealTables = {	

// 		mealTable: function(col1, col2){
// 			var i=0
// 			db.Meal.create({
// 					??: req.body.[meal_name],
// 					??: req.body.[ingredient]		
// 				}
// 				mealTables();
// 				i++
// 			})

// 		}
// 	}

// module.exports =  mealTables

//This file worked for my burger.js - I left it in for template purposes.
// module.exports = function(sequelize, DataTypes) {
// sequelize.authenticate().then(function(errors) { console.log("errors: " + errors) });
//   var burgers = sequelize.define("burgers", {
//     burger_name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1]
//       }
//     },
//     devoured: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//       defaultValue: false
//     }
//   });
//   return burgers;
// };


	
// module.exports = function(sequelize, DataTypes) {

// 	var All = sequelize.define("All", {
// 		meal_name: {
// 			type: DataTypes.STRING
// 		},

// 		User: {
// 			type: DataTypes.STRING
// 		}
// 	},{
			
// 			timestamps: false	
// 		});


// 		 return All
// }


