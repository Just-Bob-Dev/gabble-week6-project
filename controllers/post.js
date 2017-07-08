var post = require("../models/post.js");
var like = require("../models/like.js");
var user = require("../models/user.js");
const express = require('express');
// const models = require('../models');

const sequelize = require('sequelize');


exports.findPost = (req, res) => {
  res.render('gabbleHome')
  // post.sync().on('success', function() {
  //   post.findAll({
  //     order: [['id', 'DESC']],
  //     include: [{
  //       model: user,
  //       as: 'user'
  //     },{
  //       model: like,
  //       as: 'postLikes'
  //     }]
  //   }).then(function(posts){
  //     console.log()
  //     res.render('gabbleHome', {userPosts: posts});
  //   })
  // })
};
