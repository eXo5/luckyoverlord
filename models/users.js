

module.exports = function(sequelize, DataTypes) {
  sequelize.authenticate().then(function(errs){ if (errs){console.log("errors: " + errs)} });
  var User  = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sex:{
      type: DataTypes.ENUM("male", "female")
    },
    month: {
      type: DataTypes.STRING
    },
      year: {
      type: DataTypes.INTEGER
    },
      day: {
      type: DataTypes.INTEGER
    },
      height: {
      type: DataTypes.INTEGER
    },
      weight: {
      type: DataTypes.INTEGER
    },
      BMI: {
      type: DataTypes.INTEGER
    },

    created_at: {
      type: DataTypes.DATE
    }
    }, {

      classMethods: {
            associate: function(models) {
          User.hasMany(models.Meal, {
            onDelete: "cascade"
          });
        }
      
    },
    timestamps: false,  
  });
  

  return User; 
}
