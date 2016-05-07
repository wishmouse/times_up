exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('bucketList', function(table){
      table.increments('id')
      table.integer('userId')
      table.string('comment')
      console.log('bucketList table was created')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('bucketList').then(function(){
    console.log('bucketList table was dropped')
  })
};
