const db = require('../../data/dbConfig');

module.exports = {
  find,
  findById,
  add,
  remove,
  update
};

function find() {
  let rows = db('stars')
  return rows;
}

function findById(id) {
  return db('stars')
    .where({ id })
    .first();
}

async function add(stars) {
  const [id] = await db('stars').insert(stars);
  return findById(id);
}

function remove(id) {
  return db('stars')
    .where({ id })
    .del();
}

function update(id, changes) {
  return db('stars')
    .where({ id })
    .update(changes, '*');
}
