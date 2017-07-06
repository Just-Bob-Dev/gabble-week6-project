'use strict';
module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define('post', {
    content: DataTypes.STRING
  }, {});

  post.associate = function(models){
    post.belongsTo(models.user, {as:'user', foreignKey: 'userId'})

    post.hasMany(models.like, {as: 'postLikes', foreignKey: 'postId'})
  }

  return post;
};
