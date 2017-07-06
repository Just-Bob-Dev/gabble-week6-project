const express = require('express');
const router = express.Router();
const models = require('./models');
const data = require('./data.js');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

//login page if not autheticated in post will redirect to another make user page.
router.get('/', function(req, res){
  req.session.destroy();
  res.render('login');
})

//Post for login simply authenticates new users.
router.post('/', function(req, res){
  let username = req.body.username;
  let userPassword = req.body.password;
  models.user.find({
    where: {
      name: username,
      password: userPassword
    }
  }).then(function(user){
    if(user){
      req.session.user = {
        'name': user.dataValues.name,
        'id': user.dataValues.id
      }
      console.log('Req session');
      console.log(req.session.user);
      res.redirect('/homepage')
    }
    else{
      res.redirect('/sorry')
    }
  })
})

//Homepage displays all gabs and names of people who gabbed.
router.get('/homepage', function(req, res){
  let name = "";
  models.post.findAll({
    include: [{
      model: models.user,
      as: 'user'
    },
    {
      model: models.like,
      as: 'postLikes'
    }
  ]
  }).then(function(posts){
    console.log()
      res.render('gabbleHome', {userPosts: posts});
    });
  })

//Page for unauthorized users.
router.get('/sorry',function(req, res){
  res.render('sorry');
})

//Renders createUser page incase someone is not a member already.
router.get('/createUser', function(req, res){
  res.render('createUser');
})

//Builds a new user to add to database.
router.post('/createUser', function(req, res){
  let password1 = req.body.pass1;
  let password2 = req.body.pass2;
  let name_user = req.body.name_user;
  if(password1 === password2){
    const user = models.user.build({
      name: name_user,
      password: password1
    })
    user.save();
    res.redirect('/');
  }
  else{
    res.redirect('/createUser');
  }
})


//Where someone can write a gab.
router.get('/gab', function(req, res){
  res.render('gab');
})

//post that builds new gabs and then redirects to page afterwards.
router.post('/postGab', function(req, res){
  let newPost = models.post.build({
    content: req.body.gabContent,
    userId: req.session.user.id
  })
  newPost.save();
  res.redirect('/homepage');
})

//adds Likes to database
router.post('/likes', function(req, res){
  let newLike = models.like.build({
    userId : req.session.user.id,
    postId : req.body.like_button
  })
  console.log(newLike);
  newLike.save();
  res.redirect('/homepage');
})

//Deletes post from database.
router.post('/delete', function(req, res){
  models.post.destroy({
    where: {
      id:req.body.delete_button
    }
  }).then(function(){
    res.redirect('/homepage');
  })
})

//Logs user out and destroys session.
router.get('/logout', function(req, res){
  res.redirect('/');
})



module.exports = router;
