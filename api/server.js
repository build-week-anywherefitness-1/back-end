const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

const authRouter = require("./auth/auth-router");
const instructorsRouter = require("../instructors/instructors-router");

const restricted = require("../middleware/auth-restricted");

server.use("/api/auth", authRouter);
server.use("/api/instructor/classes", restricted, instructorsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ Welcome: "to Anywhere Fitness." });
});

module.exports = server;
