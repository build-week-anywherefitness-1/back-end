const db = require("../../data/dbConfig");
const supertest = require("supertest");
const server = require("../server");

beforeEach(() => {
  return db.migrate
    .rollback()
    .then(() => db.migrate.latest())
    .then(() => db.seed.run());
});

describe("AUTH", () => {
  it("can run test", () => {
    expect(true).toBeTruthy();
  });

  // register as a instructor
  describe("Register as a Instructor", () => {
    it("Returns status 201", () => {
      return supertest(server)
        .post("/api/auth/register")
        .send({
          username: "weipeluso",
          password: "12345678",
          role: "instructor",
        })
        .then((res) => {
          expect(res.status).toEqual(201);
        });
    });
  });

  //it should return a token
  it("Should return a token", () => {
    return supertest(server)
      .post("/auth/regi  ster")
      .send({
        username: "suziepeluso",
        password: "12345678",
        role: "instructor",
      })
      .then((res) => {
        expect(Array.isArray).toHaveLength(1);
      });
  });

  //login as a instructor
  describe("POST Login", () => {
    it("Returns status 200", () => {
      return supertest(server)
        .post("/api/auth/login")
        .send({ username: "LambdaInstructor", password: "12345678" })
        .then((res) => {
          expect(res.status).toEqual(200);
        });
    });
  });
  // register as a client
  describe("Register as a Instructor", () => {
    it("Returns status 201", () => {
      return supertest(server)
        .post("/api/auth/register")
        .send({
          username: "weipelusoClient",
          password: "12345678",
          role: "client",
        })
        .then((res) => {
          expect(res.status).toEqual(201);
        });
    });
  });

  //it should return a token
  it("Should return a token", () => {
    return supertest(server)
      .post("/auth/regi  ster")
      .send({
        username: "gracepeluso",
        password: "12345678",
        role: "client",
      })
      .then((res) => {
        expect(Array.isArray).toHaveLength(1);
      });
  });

  //login as a client
  describe("POST Login", () => {
    it("Returns status 200", () => {
      return supertest(server)
        .post("/api/auth/login")
        .send({ username: "LambdaClient", password: "12345678" })
        .then((res) => {
          expect(res.status).toEqual(200);
        });
    });
  });
  it("sends 401 status if invalid username or password", () => {
    return supertest(server)
      .post("/api/auth/login")
      .send({ username: "weipeluso", password: "123" })
      .then((res) => {
        expect(res.status).toEqual(401);
      });
  });
});
