const db = require("../../data/dbConfig");
const supertest = require("supertest");
const server = require("../server");

describe("environment", function () {
  it("should be using the testing database", function () {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("client model", function () {
    //Client be able to login and retrieve the class the client enrolled
    beforeEach(async () => {
      await db("userclass").truncate();
    });
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
  });

  //check if a client can add a class
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
                expect(classes).toHaveLength(1);
              });
          });
      });
  });
  //check if no of the client enrolled class is 3
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
            const classes = res.body.data;
            expect(classes).toHaveLength(1);
          });
      });
  });
});
//check if a client can remove a class
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
              expect(classes).toHaveLength(0);
            });
        });
    });
});
