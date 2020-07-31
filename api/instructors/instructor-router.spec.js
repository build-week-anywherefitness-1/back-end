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
    it("should be using the testing environment", function () {
        expect(process.env.DB_ENV).toBe("testing");
    });
});

describe("POST Register", function () {
    it("should register a new user", () => {
        return supertest(server)
            .post("/api/auth/register")
            .send({ username: "ernie123", password: "12345678", role: "instructor" })
            .then((res) => {
                expect(res.status).toBe(201);
            });
    });

    it("should fail to register a user already in the db", () => {
        return supertest(server)
            .post("/api/auth/register")
            .send({ username: "ernie", password: "123", role: "instructor" })
            .then((res) => {
                expect(res.status).toBe(500);
            })
    })
});

describe("POST Login, GET Classes, PUT Classes, DELETE Classes", () => {
    it("should login and get instructor classes", () => {
        return supertest(server)
            .post("/api/auth/login")
            .send({ username: "LambdaInstructor", password: "12345678" })
            .then((res) => {
                const token = res.body.token;
                return supertest(server)
                    .get("/api/instructor/classes/")
                    .set("authorization", token)
                    .then((res) => {
                        expect(res.status).toBe(200);
                    })
            });
    });

    it("should login and get a single class", () => {
        return supertest(server)
            .post("/api/auth/login")
            .send({ username: "LambdaInstructor", password: "12345678" })
            .then((res) => {
                const token = res.body.token;
                return supertest(server)
                    .get("/api/instructor/classes/1")
                    .set("authorization", token)
                    .then((res) => {
                        const fetchedClass = res.body.data;
                        expect(fetchedClass.id).toBe(1)
                        expect(fetchedClass.classname).toBe("Yoga");
                    })
            });
    });

    it("should login and get all the classes ", () => {
        return supertest(server)
          .post("/api/auth/login")
          .send({ username: "LambdaInstructor", password: "12345678" })
          .then((res) => {
            const token = res.body.token;
            return supertest(server)
              .get("/api/instructor/classes/all")
              .set("authorization", token)
              .then((res) => {
                const classes = res.body.data;
                expect(classes).toHaveLength(8);
              });
          });
      });

      it("should login and create a new class", () => {
        return supertest(server)
          .post("/api/auth/login")
          .send({ username: "LambdaInstructor", password: "12345678" })
          .then((res) => {
            const token = res.body.token;
            return supertest(server)
              .post("/api/instructor/classes/")
              .send({ 
                classname: 'Soccer Practice', 
                location: 'Anywhere Fitness', 
                date: '08/31/2020', 
                time: '12:00', 
                classtype: 'Soccer', 
                duration: '1h', 
                intensityLevel: 'Beginner', 
                currentAttendeesNo: 0, 
                maxsize: 30
              })
              .set("authorization", token)
              .then((res) => {
                const newClass = res.body.data;
                expect(newClass.classname).toBe("Soccer Practice");
              });
          });
      });

      it("should login and fail to create a new class due to missing classname property", () => {
        return supertest(server)
          .post("/api/auth/login")
          .send({ username: "LambdaInstructor", password: "12345678" })
          .then((res) => {
            const token = res.body.token;
            return supertest(server)
              .post("/api/instructor/classes/")
              .send({
                location: 'Anywhere Fitness', 
                date: '08/31/2020', 
                time: '12:00', 
                classtype: 'Soccer', 
                duration: '1h', 
                intensityLevel: 'Beginner', 
                currentAttendeesNo: 0, 
                maxsize: 30
              })
              .set("authorization", token)
              .then((res) => {
                expect(res.status).toBe(500);
              });
          });
      });

      it("should login and update a class name", () => {
        return supertest(server)
          .post("/api/auth/login")
          .send({ username: "LambdaInstructor", password: "12345678" })
          .then((res) => {
            const token = res.body.token;
            return supertest(server)
              .put("/api/instructor/classes/1")
              .send({
                id: 1, 
                classname: 'Extreme Yoga', 
                location: 'Anywhere Fitness', 
                date: '08/05/2020', 
                time: '12:00', 
                classtype: 'Yoga', 
                duration: '1h', 
                intensityLevel: 'Beginner', 
                currentAttendeesNo: 0, 
                maxsize: 30
              })
              .set("authorization", token)
              .then((res) => {
                const updatedClass = res.body.data;
                expect(updatedClass.classname).toBe("Extreme Yoga");
              });
          });
      });

      it("should login and update a class location", () => {
        return supertest(server)
          .post("/api/auth/login")
          .send({ username: "LambdaInstructor", password: "12345678" })
          .then((res) => {
            const token = res.body.token;
            return supertest(server)
              .put("/api/instructor/classes/1")
              .send({
                id: 1, 
                classname: 'Yoga', 
                location: 'Hawaii', 
                date: '08/05/2020', 
                time: '12:00', 
                classtype: 'Yoga', 
                duration: '1h', 
                intensityLevel: 'Beginner', 
                currentAttendeesNo: 0, 
                maxsize: 30
              })
              .set("authorization", token)
              .then((res) => {
                const updatedClass = res.body.data;
                expect(updatedClass.location).toBe("Hawaii");
              });
          });
      });

      it("should login and delete class with the id 1", () => {
        return supertest(server)
          .post("/api/auth/login")
          .send({ username: "LambdaInstructor", password: "12345678" })
          .then((res) => {
            const token = res.body.token;
            return supertest(server)
              .delete("/api/instructor/classes/1")
              .set("authorization", token)
              .then((res) => {
                const deletedClass = res.body.removed;
                expect(deletedClass.id).toBe(1);
              });
          });
      });

      it("should login and fail to delete a class", () => {
        return supertest(server)
          .post("/api/auth/login")
          .send({ username: "LambdaInstructor", password: "12345678" })
          .then((res) => {
            const token = res.body.token;
            return supertest(server)
              .delete("/api/instructor/classes/")
              .set("authorization", token)
              .then((res) => {
                expect(res.status).toBe(404);
              });
          });
      });
})
