const knex = require("knex");
const knexfile = require("../knexfile");
const enviroment = process.env.DB_ENV || "testing";

module.exports = knex(knexfile[enviroment]);
