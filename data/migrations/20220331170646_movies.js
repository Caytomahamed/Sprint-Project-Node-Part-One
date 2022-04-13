
exports.up = function(knex) {
  return knex.schema
    .createTable('movies', tbl => {
        tbl.increments('id').notNullable();
        tbl.string('name');
        tbl.string('email');
        tbl.string('created');
        tbl.string('updated');
    })
    .createTable('stars', tbl => {
        tbl.increments('id').notNullable();
        tbl.string('name');
        tbl.string('location');
        tbl.integer('owner_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('owners')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.string('created');
        tbl.string('updated');
    })
    .createTable('ratings', tbl => {
        tbl.increments('id').notNullable();
        tbl.integer('rating');
        tbl.integer('restaurant_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('restaurants')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.string('created');
        tbl.string('updated');
    })
};

exports.down = function(knex) {
    // Wuxuu u tir tirayaa sida ay u kala hooseeyaa
    return knex.schema
        .dropTableIfExists('movies')
        .dropTableIfExists('stars')
        .dropTableIfExists('ratings');

        
  
};
