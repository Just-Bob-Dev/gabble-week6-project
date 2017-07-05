const express = require('express');
const sequelize = require('sequelize');
const session = require('express-session');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const models = require('./models');


// function authenticate(req, username, userPassword){
//   models.user.find({
//     where: {
//       name: username,
//       password: userPassword
//     }
//   }).then(function(user){
//     if(user){
//       console.log('this is true');
//       req.session.authenticate = true;
//     }
//     else{
//       cosole.log('this is false');
//       req.session.authenticate = false;
//     }
//   })
//   return req.session;
// }


// module.exports = {
//   authenticate: authenticate
// }
