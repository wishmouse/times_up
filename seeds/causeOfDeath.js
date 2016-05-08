exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('stats').del(),

    // Inserts seed entries
    knex('stats').insert({id: 1, causeOfDeath: 'Road Traffic Accident', age: '15-24', rank: 1 , gender: 'female'}),
    knex('stats').insert({id: 2, causeOfDeath: 'Suicide', age: '15-24', rank: 2, gender: 'female'}),
    knex('stats').insert({id: 3, causeOfDeath: 'Poisoning', age: '15-24', rank: 3, gender: 'female'}),
    knex('stats').insert({id: 4, causeOfDeath: 'Hepatitis C', age: '15-24', rank: 4, gender: 'female'}),
    knex('stats').insert({id: 5, causeOfDeath: 'Parkinson Disease', age: '35-44', rank: 3, gender: 'female'})
  );
};


// exports.seed = function(knex, Promise) {
//   return Promise.join(
//     // Deletes ALL existing entries
//     knex('bucketList').del(),

//     // Inserts seed entries
//     knex('stats').insert({id: 1, userId: 1, comment: 'New York: Have to see Times Square, Museum of Natural History, ice skate at Rockefeller Center and pizza from the Bronx and a Rueben Sandwich Katz deli.', imageUrl: 'http://www.hercampus.com/sites/default/files/2016/03/31/New-York.jpg'}),
//      knex('stats').insert({id: 2 userId: 1, comment: 'Tahiti: Swimming with Turtles', imageUrl: 'http://www.toptourscancun.com/images/photos/87/top-tours-cancun-cenotes-and-turtles-main.jpg'}),
//      knex('stats').insert({id: 3 userId: 1, comment: 'Stand up comedy gig', imageUrl: 'http://2.bp.blogspot.com/-pWEU-tF5Puw/UakZC7ErPjI/AAAAAAAACBg/ETWPk02I_xE/s1600/stund-up.pngclimb'}),
//      knex('stats').insert({id: 4 userId: 1, comment: 'Become an Ironman', imageUrl: 'http://www.ironman.com/~/media/f2dbd7c6de124cafaf4222962636afde/imnz%202015%20kessler%20wins.jpg?w=1600&h=980&c=1'}),
//      knex('stats').insert({id: 5 userId: 1, comment: 'Got to the top of Africa... Uhuru Peak, Kilimanjaro', imageUrl: 'http://onestep4ward.com/wp-content/uploads/2010/11/climbing-kilimanjaro-ona-budget.jpgbul'}),
//      knex('stats').insert({id: 6 userId: 1, comment: 'Float in the Dead Sea', imageUrl: 'http://www.jewishvirtuallibrary.org/images/deadsea.jpg'}),
//      knex('stats').insert({id: 7 userId: 1, comment: 'Learn to ride a motor cycle', imageUrl: 'https://i.ytimg.com/vi/Fw8agSotU-M/maxresdefault.jpg'}),
//      knex('stats').insert({id: 8 userId: 1, comment: 'Build a gingerbread house', imageUrl: 'http://www.kingarthurflour.com/gingerbread/images/gingerbread-house-m.jpg'}),
//      knex('stats').insert({id: 9 userId: 1, comment: 'See Machu Picchu', imageUrl: 'http://www.andeanculture.com/images/tours/machu-picchu-tour.jpg'}),
//      knex('stats').insert({id: 10 userId: 1, comment: 'Steampunk outfit up and running', imageUrl: 'https://img0.etsystatic.com/007/0/5305233/il_570xN.380013868_7usu.jpg'})
//   );
// };
