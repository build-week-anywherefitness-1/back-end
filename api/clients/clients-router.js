const router = require("express").Router();

const Clients = require("./clients-model");

router.get("/", (req, res) => {
  const { userId } = req.jwt;
  Clients.getClientClasses(userId)
    .then((classes) => {
      res.status(201).json({ data: classes });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

router.get("/all", (req, res) => {
  Clients.getAllClasses()
    .then((classes) => res.status(201).json({ data: classes }))
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

router.post("/:classid", (req, res) => {
  const classId = req.params.classid;
  const { userId } = req.jwt;
  Clients.checkEnrollment(userId, classId)
    .then((returnedClass) => {
      if (returnedClass.length !== 0) {
        res
          .status(500)
          .json({ message: "You are already enrolled in this class" });
      } else {
        Clients.enrollAClass(userId, classId)
          .then((classes) => res.status(201).json({ data: classes }))
          .catch((error) => {
            res.status(500).json({ message: error.message });
          });
      }
    })

    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

router.delete("/:classid", (req, res) => {
  const classId = req.params.classid;
  const { userId } = req.jwt;
  Clients.cancelAClass(userId, classId)
    .then((deleted) => {
      if (deleted === 1) {
        res.status(201).json({ message: "Successfully cancel the class." });
      } else {
        res.status(400).json({ message: "Failed Delete!" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Client.findById(id)
    .then((aClass) => {
      if (aClass) {
        Instructor.updateClass(changes, id).then((updatedClass) => {
          res.status(200).json(updatedClass);
        });
      } else {
        res.status(404).json({ message: "Could not find class with given id" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

module.exports = router;
