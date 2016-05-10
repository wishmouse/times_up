
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('buckets').del(),

    // Inserts seed entries
     knex('buckets').insert({id: 11, userId: 2, comment: 'New York: Have to see Times Square, Museum of Natural History, ice skate at Rockefeller Center and pizza from the Bronx and a Rueben Sandwich Katz deli.', imageUrl: 'http://www.hercampus.com/sites/default/files/2016/03/31/New-York.jpg'}),
     knex('buckets').insert({id: 12, userId: 2, comment: 'Tahiti: Swimming with Turtles', imageUrl: 'http://www.toptourscancun.com/images/photos/87/top-tours-cancun-cenotes-and-turtles-main.jpg'}),
     knex('buckets').insert({id: 13, userId: 2, comment: 'Stand up comedy gig', imageUrl: 'http://2.bp.blogspot.com/-pWEU-tF5Puw/UakZC7ErPjI/AAAAAAAACBg/ETWPk02I_xE/s1600/stund-up.pngclimb'}),
     knex('buckets').insert({id: 14, userId: 2, comment: 'Become an Ironman', imageUrl: 'http://www.ironman.com/~/media/f2dbd7c6de124cafaf4222962636afde/imnz%202015%20kessler%20wins.jpg?w=1600&h=980&c=1'}),
     knex('buckets').insert({id: 15, userId: 2, comment: 'Got to the top of Africa... Uhuru Peak, Kilimanjaro', imageUrl: 'http://palmbeachgroup.com/wp-content/uploads/2015/02/Uhuru_Peak_Mt._Kilimanjaro_2.jpg'}),
     knex('buckets').insert({id: 16, userId: 2, comment: 'Float in the Dead Sea', imageUrl: 'http://www.jewishvirtuallibrary.org/images/deadsea.jpg'}),
     knex('buckets').insert({id: 17, userId: 2, comment: 'Learn to ride a motor cycle', imageUrl: 'https://i.ytimg.com/vi/Fw8agSotU-M/maxresdefault.jpg'}),
     knex('buckets').insert({id: 18, userId: 2, comment: 'Build a gingerbread house', imageUrl: 'http://www.kingarthurflour.com/gingerbread/images/gingerbread-house-m.jpg'}),
     knex('buckets').insert({id: 19, userId: 2, comment: 'See Machu Picchu', imageUrl: 'http://www.andeanculture.com/images/tours/machu-picchu-tour.jpg'}),
     knex('buckets').insert({id: 20, userId: 2, comment: 'Steampunk outfit up and running', imageUrl: 'https://img0.etsystatic.com/007/0/5305233/il_570xN.380013868_7usu.jpg'}),
     knex('buckets').insert({id: 21, userId: 2, comment: 'Cycle up with West Coast of New Zealand', imageUrl: 'http://www.acrossnz.com/wp-content/uploads/2013/11/New_Zealand_bike_tour1-1024x784.jpg'}),
     knex('buckets').insert({id: 22, userId: 2, comment: 'Visit Morocco', imageUrl: 'http://creationlondon.co.uk/wp-content/uploads/2013/03/Morocco_featured.jpg'}),
     knex('buckets').insert({id: 23, userId: 2, comment: 'Watch a live NBA game', imageUrl: 'https://pbs.twimg.com/profile_images/469911843058626561/xNc-krMY.jpeg'}),
     knex('buckets').insert({id: 24, userId: 2, comment: 'Ride a camel', imageUrl: 'http://www.goldenpyramid.travel/wp-content/uploads/2012/12/DSC041501-1024x680.jpg'})

  );
};
