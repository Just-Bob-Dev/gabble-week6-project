'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, { });

  user.prototype.fullName = function(){
    return`${this.name}`;
  }

  return user;
};
