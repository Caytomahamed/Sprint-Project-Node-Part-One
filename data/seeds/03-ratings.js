exports.seed = function(knex, Promise) {
  return knex('ratings').insert([
    { rating: 5, movie_id: 1, created: '2022-03-30', updated: '2022-03-30' },
    { rating: 4, movie_id: 3, created: '2022-03-30', updated: '2022-03-30' },
    { rating: 3, movie_id: 2, created: '2022-03-30', updated: '2022-03-30' }
  ]);
};
