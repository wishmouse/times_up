var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('express-hbs')
var app = express();
var knex = require('knex');
var Promise = this.Promise || require('promise');
var agent = require('superagent-promise')(require('superagent'), Promise);
var fs = require('fs');
var cheerio = require('cheerio');

var readFileName = __dirname + '/data/readData.json'
var writeFileName = __dirname + '/data/writeData.json'

var readFilePromise = Promise.denodeify(fs.readFile)
var writeFilePromise = Promise.denodeify(fs.writeFile)

require('dotenv').config();
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/scrape', function(req, res){

function promiseRead () {
  readFilePromise(readFilePromise, 'utf8')
    .then( function (results) {
      return results
    })
    .catch( function (err) {
      throw err
    })
}

function promiseWrite (obj) {
  var stringified = JSON.stringify(obj)

  writeFilePromise( writeFileName, stringified )
    .catch(function(err){
      console.log('error')
    })
}


readFilePromise(readFileName, 'utf8')
  .then ( function (readFile) {
    var url = JSON.parse(readFile).url

    return url
  })
  .then ( function (url) {

    agent.get(url)
  })
  .then( function (res) {
    var $ = cheerio.load(res.text);
    var links = $('a')

    var arr = []

    for( i = 0; i < links.length; i++) {
      arr.push(links[i].attribs.href)
    }
    return arr
  })
  .then( function (linkArr) {
    promiseWrite( linkArr )
  })
  .catch( function (err) { throw err } )

  res.send('check the console')
  })


app.listen(3000, function(){
console.log("well its not dead.... 3000")
})


module.exports = app;
