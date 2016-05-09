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

