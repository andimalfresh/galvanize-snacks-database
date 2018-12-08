
exports.up = function(knex, Promise) {
   return knex.schema.createTable('posts', post => {
       post.increments('id')
   })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts')
};
