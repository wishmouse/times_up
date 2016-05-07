var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('express-hbs');
var app = express();
var knex = require('knex');
var Promise = this.Promise || require('promise');
var agent = require('superagent-promise')(require('superagent'), Promise);
var fs = require('fs');
var cheerio = require('cheerio');
var passport= require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var server = require('http').createServer(app); // create the server
var session = require('express-session');

var readFile = Promise.denodeify(fs.readFile);
var writeFile = Promise.denodeify(fs.writeFile);

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
  function(accessToken, refreshToken, profile, cb) {
    // console.log('-------------------------------------------')
    // console.log('id = facebookId', profile.id)
    // console.log('displayName = userName', profile.displayName)
    // console.log('givenName = firstName', profile.name.givenName)
    // console.log('gender = gender', profile.gender)
    var user = profile
    return cb(null, user)
  }
)),

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
  res.render('secret')
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

app.get('/index', function(req, res) {
   res.render('index') //user id
 })

//=================================
//========= POST routes ===========
//=================================

app.post('/', function(req, res){

  res.render('/secret')
})

app.post('/index', function(req, res){
  var birthday = req.body.birthday
  var birthdayFormatted = new Date(birthday)
  console.log("birthdayFormatted",birthdayFormatted)

  var deathDate = new Date(birthday).setFullYear(birthdayFormatted.getFullYear() + 81 )
  var deathDateFormatted = new Date(deathDate)

  console.log("your death date:", deathDateFormatted)

  //================age & assigning values ====

  var today = new Date()
  var difference = today-birthdayFormatted
  var age = Math.floor(difference/31536000000);

  console.log('your age:', age)

  //================countdown =================


  var countdown = function(deathDateFormatted, timer, callback){
    second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24,
    year = day * 365,

  // console.log("console.log 1:",second, minute, hour, day, year)

    end =  new Date(deathDate),
    timer,

    // console.log('end 2 :', end )

    calculate = function(){
      var now = new Date(),
      remaining = end.getTime()-now.getTime(),
      data;

      // console.log('remaining 4 :', remaining )

      if(isNaN(end)){
        console.log("err");
        return;
      }

      if(remaining <= 0){
        clearInterval(timer);
        if(typeof callback === 'function'){
        callback();
          }
      } else {
        // if(!timer){
        //   timer = setInterval(calculate, second); //count down...
        //     }
          }

      data = {
        'years': Math.floor(remaining / year),
        'days': Math.floor((remaining % year) / day),
        'hours': Math.floor((remaining % day) / hour),
        'minutes': Math.floor((remaining % hour) / minute),
        'seconds': Math.floor((remaining % minute) / second)
      }
      console.log("the data 5: ", data )
   };
    calculate()
  }
  countdown()
  //=============================
  //=============datatbase ======
  //=============================
  knex('stats').where('id', 1)
  .then(function(data){
  res.render('index',{ causeOfDeath: causeOfDeath, birthday: birthdayFormatted, age: age, deathday: deathDateFormatted})
})
})



//=================================
//=========SERVER =================
//=================================

app.listen(3000, function(){
  console.log("well its not dead.... 3000")
})

module.exports = app;
