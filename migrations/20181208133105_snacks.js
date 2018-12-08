
exports.up = (knex, Promise) => {
  return knex.schema.createTable('snacks', snack => {
      snack.increments('id')
      snack.string('name')
      snack.string('description')
      snack.boolean('is_perishable')
      snack.string('price')
      snack.string('img')
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('snacks');
};
