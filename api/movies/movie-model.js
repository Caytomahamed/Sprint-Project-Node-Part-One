const db = require('../../data/dbConfig');

module.exports = {
  find,
  findById,
  add,
  remove,
  update
};

function find() {
  let rows = db('movies')
  return rows;
}

function findById(id) {
  return db('movies')
    .where({ id })
    .first();
}

async function add(movie) {
  const [id] = await db('movies').insert(movie);
  return findById(id);
}

function remove(id) {
  return db('movies')
    .where({ id })
    .del();
}

function update(id, changes) {
  return db('movies')
    .where({ id })
    .update(changes, '*');
}
