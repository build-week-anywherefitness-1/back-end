exports.up = function (knex) {
  return knex.schema.createTable("classes", (tbl) => {
    tbl.increments();
    tbl.string("classname", 128).unique().notNullable();
    tbl.string("location", 256).notNullable();
    tbl.string("date", 56).notNullable();
    tbl.string("time", 56).notNullable();
    tbl.string("classtype", 128);
    tbl.string("duration", 56);
    tbl.string("intensityLevel", 128);
    tbl.integer("currentAttendeesNo");
    tbl.integer("maxsize");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("classes");
};
