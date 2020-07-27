exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'ernie', password: '123', email: 'ernie@ernie.com', role: 'instructor'},
        {username: 'bob', password: '123', email: 'bob@bob.com', role: 'client'},
        {username: 'britt', password: '123', email: 'britt@britt.com', role: 'client'}
      ]);
    });
};
