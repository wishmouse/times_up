var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('express-hbs');
var app = express();
var Promise = this.Promise || require('promise');
var agent = require('superagent-promise')(require('superagent'), Promise);
var fs = require('fs');
var cheerio = require('cheerio');
var passport= require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var server = require('http').createServer(app); // create the server
var session = require('express-session');
var router = require('express').Router();

var readFile = Promise.denodeify(fs.readFile);
var writeFile = Promise.denodeify(fs.writeFile);


var knexConfig = require('./knexfile')
var env = process.env.NODE_ENV || 'development'
var knex = require('knex')(knexConfig[env]);

require('dotenv').config();
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//===================================
// ===========Oauth =================
//===================================

passport.use(new FacebookStrategy({
    clientID:'1718250611751481',
    clientSecret:'16603379730537292c6536951b8499c8',
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'first_name', 'email', 'gender', 'hometown']

  },
  function(accessToken, refreshToken, profile, callback) {
    // console.log('-------------------------------------------')
    // console.log('id = facebookId', profile.id)
    // console.log('displayName = userName', profile.displayName)
    // console.log('givenName = firstName', profile.name.givenName)
    // console.log('gender = gender', profile.gender)
    knex('users').select('*').where({
      facebookId: profile.id
    }).then(function (resp){
      if(resp.length === 0){
        var user = {
          facebookId: profile.id,
          userName: profile.displayName,
          firstName: profile.name.givenName,
          gender: profile.gender
        }

        knex('users').insert(user).then(function(resp){
          callback(null, user)
        })
      } else {
        callback(null, resp[0])
      }
    })
  }
))

passport.serializeUser(function(user, cb) {
  // console.log('-------------------------------------------')
  // console.log('!serializer being called')
  // console.log('user:', user)
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  // console.log('-------------------------------------------')
  // console.log('!deserializer being called')
  // console.log('obj', obj)
  cb(null, obj);
});

//=================================
//=========ROUTES =================
//=================================
app.get('/', function(req, res){

  res.render('signIn')
})

app.get('/secret', function(req, res){
  // console.log('req.user:', req.user)
  res.render('secret',{userId: req.user.id})
})

app.get('/auth/facebook',  //sent to FB to authenticate
  passport.authenticate('facebook')
);


app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/auth/facebook' }),
  function(req, res) { // Successful authentication, redirect home.
    res.redirect('/secret')
  }
);

app.get('/index/:id', function(req, res) {
  knex('buckets').where('userId', req.user.id)
  .then(function(data){
    knex('stats').where({age: "15-24"})
      .then(function(response){
        console.log("stats:response.age ", response)
          knex('buckets').insert({comments: req.body.notes, imageUrl: req.body.url})
          .then(function(addBucket){
            console.log('notes; ',req.body.notes)
            console.log('url: ',req.body.url)
            console.log('userId:',req.session.userId)
            })

 res.render('index',{user: req.user, buckets: data, stats:response})
      })
 })
})
//=================================
// ===========post an bucketlist===
//=================================

app.post('/index/:id', function(req, res){
  knex('buckets').insert({comments:req.body.comments})
    .then(function(addBucket){
        console.log('comments; ',req.body.comments)
        console.log('imageUrl: ',req.body.imagUrl)
        console.log('userId:',req.session.userId)
    })


  res.render('index', xxx)
})



//=================================
//=================================


app.listen(3000, function(){
  console.log("well its not dead.... 3000")
})

module.exports = app;
