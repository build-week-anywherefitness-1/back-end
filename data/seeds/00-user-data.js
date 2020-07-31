exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "LambdaInstructor",
          password:
            "$2a$08$4VVFP9rZ8JbW9ZQcFDiaree41pBeeCA4iOOOoeb4j41qMSVG2Ak3O",
          email: "lambdaInstructor@lambda.com",
          role: "instructor",
        },
        {
          username: "LambdaClient",
          password:
            "$2a$08$4VVFP9rZ8JbW9ZQcFDiaree41pBeeCA4iOOOoeb4j41qMSVG2Ak3O",
          email: "lambdaClient@lambda.com",
          role: "client",
        },
        {
          username: "ernie",
          password:
            "$2a$08$4VVFP9rZ8JbW9ZQcFDiaree41pBeeCA4iOOOoeb4j41qMSVG2Ak3O",
          email: "ernie@ernie.com",
          role: "instructor",
        },
        {
          username: "bob",
          password:
            "$2a$08$4VVFP9rZ8JbW9ZQcFDiaree41pBeeCA4iOOOoeb4j41qMSVG2Ak3O",
          email: "bob@bob.com",
          role: "client",
        },
        {
          username: "britt",
          password:
            "$2a$08$4VVFP9rZ8JbW9ZQcFDiaree41pBeeCA4iOOOoeb4j41qMSVG2Ak3O",
          email: "britt@britt.com",
          role: "client",
        },
      ]);
    });
};