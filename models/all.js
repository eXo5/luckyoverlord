	
module.exports = function(sequelize, DataTypes) {

	var All = sequelize.define("All", {
		meal_name: {
			type: DataTypes.STRING
		},

		User: {
			type: DataTypes.STRING
		}
	},{
			
			timestamps: false	
		});


		 return All
}


