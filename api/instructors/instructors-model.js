const db = require("../../data/dbConfig");

module.exports = {
  getInstructorClasses,
  findById,
  addClass,
  updateClass,
  deleteClass,
  getAllClasses,
};

function getInstructorClasses(id) {
  return db("userclass as uc")
    .join("users as u", "uc.userid", "u.id")
    .join("classes as c", "uc.classid", "c.id")
    .select("*")
    .where({ "uc.userid": id });
}

function findById(id) {
  return db("classes").where({ id }).first();
}

async function addClass(id, newClass) {
  const [classid] = await db("classes").insert(newClass, "id");
  db("userclass")
    .insert({ userid: id, classid: classid })
    .then((res) => {
      console.log("I am here");
      console.log(res);
    });
  return findById(classid);
}

async function updateClass(classes, id) {
  await db("classes").update(classes).where({ id });
  return findById(id);
}

async function deleteClass(classId, userId) {
  const promise1 = await findById(id);
  await db("userclass")
    .where({ userid: userId })
    .where({ classid: classId })
    .del();
  const promise2 = db("classes")
    .where({ classId })
    .del()
    .then(() => {
      return promise1;
    });
  return promise2;
}

function getAllClasses() {
  return db("classes").select("*");
}
