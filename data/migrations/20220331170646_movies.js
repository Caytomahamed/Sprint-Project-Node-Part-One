
exports.up = function(knex) {
  return knex.schema
    .createTable('stars', tbl => {
        tbl.increments('id').notNullable();
        tbl.string('name');
        tbl.string('age');
        tbl.string('image_url');
        tbl.string('created');
        tbl.string('updated');
    })
    .createTable('movies', tbl => {
        tbl.increments('id').notNullable();
        tbl.string('name');
        tbl.string('release_date');
        tbl.string('image_url');
        tbl.string('description');
        tbl.integer('star_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('stars')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.string('created');
        tbl.string('updated');
    })
    .createTable('ratings', tbl => {
        tbl.increments('id').notNullable();
        tbl.integer('rating');
        tbl.integer('movie_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('movies')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.string('created');
        tbl.string('updated');
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('stars')
        .dropTableIfExists('movies')
        .dropTableIfExists('ratings');

        
  
};
