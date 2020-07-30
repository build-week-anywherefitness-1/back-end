const db = require("../../data/dbConfig");
const supertest = require("supertest");
const server = require("../server");

beforeEach(async () => {
  return await db.migrate
    .rollback()
    .then(() => db.migrate.latest())
    .then(() => db.seed.run());
});

describe("environment", function () {
  it("should be using the testing database", function () {
    expect(process.env.DB_ENV).toBe("testing");
  });

  //register a client
  describe("register a client", function () {
    //Client be able to login and retrieve the class the client enrolled
    it("login and get all the classes ", () => {
      return supertest(server)
        .post("/api/auth/register")
        .send({ username: "weipeluso", password: "123456789", role: "client" })
        .then((res) => {
          expect(res.status).toEqual(201);
        });
    });
  });

  describe("client model", function () {
    //Client be able to login and retrieve the class the client enrolled
    it("login and get all the classes ", () => {
      return supertest(server)
        .post("/api/auth/login")
        .send({ username: "LambdaClient", password: "12345678" })
        .then((res) => {
          const token = res.body.token;
          return supertest(server)
            .get("/api/client/classes")
            .set("authorization", token)
            .then((res) => {
              expect(res.status).toEqual(201);
            });
        });
    });

    //check return a single class
    it("login and get one single class ", () => {
      return supertest(server)
        .post("/api/auth/login")
        .send({ username: "LambdaClient", password: "12345678" })
        .then((res) => {
          const token = res.body.token;
          return supertest(server)
            .get("/api/client/classes/1")
            .set("authorization", token)
            .then((res) => {
              const classes = res.body;
              expect(classes).id = 1;
              expect(classes).classname = "Yoga";
            });
        });
    });

    //check if no of all class is 8
    it("login and get all the classes ", () => {
      return supertest(server)
        .post("/api/auth/login")
        .send({ username: "LambdaClient", password: "12345678" })
        .then((res) => {
          const token = res.body.token;
          return supertest(server)
            .get("/api/client/classes/all")
            .set("authorization", token)
            .then((res) => {
              const classes = res.body.data;
              expect(classes).toHaveLength(8);
            });
        });
    });
    //check if the no of clinet enrolled classes is 3
    it("login and get all the classes ", () => {
      return supertest(server)
        .post("/api/auth/login")
        .send({ username: "LambdaClient", password: "12345678" })
        .then((res) => {
          const token = res.body.token;
          return supertest(server)
            .get("/api/client/classes/")
            .set("authorization", token)
            .then((res) => {
              const classes = res.body.data;
              expect(classes).toHaveLength(3);
            });
        });
    });
    //check if a client can add a class and no of class become 4
    it("login and add a class ", () => {
      return supertest(server)
        .post("/api/auth/login")
        .send({ username: "LambdaClient", password: "12345678" })
        .then((res) => {
          const token = res.body.token;
          return supertest(server)
            .post("/api/client/classes/8")
            .set("authorization", token)
            .then((res) => {
              supertest(server)
                .get("/api/client/classes")
                .set("authorization", token)
                .then((res) => {
                  const classes = res.body.data;
                  expect(classes).toHaveLength(4);
                });
            });
        });
    });
    //check if a client can remove a class and the class no become 3
    it("login and get all the classes ", () => {
      return supertest(server)
        .post("/api/auth/login")
        .send({ username: "LambdaClient", password: "12345678" })
        .then((res) => {
          const token = res.body.token;
          return supertest(server)
            .delete("/api/client/classes/8")
            .set("authorization", token)
            .then((res) => {
              supertest(server)
                .get("/api/client/classes")
                .set("authorization", token)
                .then((res) => {
                  const classes = res.body.data;
                  expect(classes).toHaveLength(3);
                });
            });
        });
    });
  });
});
