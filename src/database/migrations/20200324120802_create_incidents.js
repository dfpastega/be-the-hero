
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){
        /**
         * campo autonumerar
         */
        table.increments();
        /**
         * Campos da tabela
         */
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        table.string('ong_id').notNullable();
        /**
         * ligação com o id da tabela  ongs, os dados do campo ong_id devem constar no campo Id da tabela ongs
         */
        table.foreign('ong_id').references('id').inTable('ongs');
    });
};

/**
 * rollback
 */
exports.down = function(knex) {
  return knex.schema.dropTable('incidents')
};
