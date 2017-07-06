'use strict';
module.exports = function(sequelize, DataTypes) {
  var like = sequelize.define('like', {
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER
  }, {});

  like.associate = function(models){
    like.belongsTo(models.user, {as:'userLike', foreignKey:'userId'})

    like.belongsTo(models.post, {as:'postLike', foreignKey:'postId'})
  }

  return like;
};
