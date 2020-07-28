exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("userclass")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("userclass").insert([
        { userid: 1, classid: 1 },
        { userid: 1, classid: 2 },
        { userid: 1, classid: 3 },
        { userid: 2, classid: 2 },
        { userid: 2, classid: 4 },
        { userid: 2, classid: 6 },
      ]);
    });
};
