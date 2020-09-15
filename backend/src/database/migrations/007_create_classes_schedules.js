
exports.up = function (knex) {
  return knex.schema.createTable('classes_schedules', (table) => {
    table.integer('schedule_id').unsigned();
    table.integer('classe_id').unsigned();

    table.foreign('classe_id')
      .references('id')
      .inTable('classes')
      .onDelete('CASCADE')
      .onUpdate('NO ACTION');

    table.foreign('schedule_id')
      .references('id')
      .inTable('schedules');

  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('classes_schedules');
};