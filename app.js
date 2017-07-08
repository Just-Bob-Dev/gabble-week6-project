const express = require('express');
const mustacheExpress = require('mustache-express');
const sequelize = require('sequelize');
const session = require('express-session');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const models = require('./models');
const router = require('./routes.js')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator());
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(express.static('./public'));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));


app.use('/', router);

app.listen(3000, function(req, res){
  console.log("Looks like you made it after all.")
})
