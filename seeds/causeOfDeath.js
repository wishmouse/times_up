exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('stats').del(),

    // Inserts seed entries
    knex('stats').insert({id: 1, userId: '', causeOfDeath: 'Road Traffic Accident', age: '15-24', rank: 1 , gender: 'female'}),
    knex('stats').insert({id: 2, userId: '', causeOfDeath: 'Suicide', age: '15-24', rank: 2, gender: 'female'}),
    knex('stats').insert({id: 3, userId: '', causeOfDeath: 'Poisoning', age: '15-24', rank: 3, gender: 'female'}),
    knex('stats').insert({id: 3, userId: '', causeOfDeath: 'Hepatitis C', age: '15-24', rank: 4, gender: 'female'}),
    knex('stats').insert({id: 3, userId: '', causeOfDeath: 'Parkinson Disease', age: '35-44', rank: 3, gender: 'female'})
  );
};
