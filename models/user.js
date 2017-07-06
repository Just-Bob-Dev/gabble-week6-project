'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, { });

  user.associate = function(models){
    user.hasMany(models.like, {as: 'userLike', foreignKey: 'userId'})
  }

  return user;
};
