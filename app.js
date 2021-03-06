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
var port = process.env.PORT || 3000

var knexConfig = require('./knexfile')
var env = process.env.NODE_ENV || 'development'
var knex = require('knex')(knexConfig[env]);

require('dotenv').config();
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new FacebookStrategy({
  clientID:'1718250611751481',
  clientSecret:'16603379730537292c6536951b8499c8',
  callbackURL: "http://localhost:3000/auth/facebook/callback",
  profileFields: ['id', 'displayName', 'first_name', 'email', 'gender', 'hometown']
},
  function(accessToken, refreshToken, profile, callback) {
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
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

app.get('/', function(req, res){
  res.render('signIn')
})

app.get('/secret', function(req, res){
  res.render('secret',{userId: req.user.id})
})

app.get('/auth/facebook',
  passport.authenticate('facebook')
);


app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/auth/facebook' }),
  function(req, res) {
    res.redirect('/secret')
  }
);

app.get('/index/:id', function(req, res) {
  knex('buckets').where('userId', req.user.id)
  .then(function(data){
    knex('stats').where({gender: "female"})
    .then(function(response){
      console.log("lines 107:", data)
      res.render('index',{user: req.user, buckets:data, stats:response})
    })
  })
})

app.post('/index', function(req, res){
  knex('buckets').insert({comment: req.body.comment, imageUrl: req.body.imageUrl, userId:req.user.id})
  .then(function(data){
    res.redirect('/index/'+req.user.id)
  })
})


app.listen(3000, function(){
  console.log("well its not dead.... 3000")
})

module.exports = app;
