exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments();
    tbl.string("username", 128).notNullable().unique();
    tbl.string("password", 256).notNullable();
    tbl.string("email", 128);
    tbl.string("role", 128).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
