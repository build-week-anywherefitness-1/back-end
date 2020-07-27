exports.up = function (knex) {
  return knex.schema.createTable("userclass", (tbl) => {
    tbl.increments();
    tbl
      .integer("userid")
      .references("users.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("classid")
      .references("classes.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("userclass");
};
