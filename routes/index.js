var express = require('express');
var router = express.Router();

/* GET all buckets for user. */
router.get('/index', function(req, res, next) {
  knex('buckets').select()
  .then(function(data){
res.json(data)
  })
});



module.exports = router;
