var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('express-hbs')
var app = express();
var knex = require('knex');

require('dotenv').config();
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function(req, res){
  res.render('index')
})


app.listen(3000, function(){
console.log("well its not dead.... 3000")
})


module.exports = app;
