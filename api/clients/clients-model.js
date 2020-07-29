const db = require("../../data/dbConfig");
const { select, distinct } = require("../../data/dbConfig");

const getAllClasses = () => {
  return db("classes").select("*");
};

const getClientClasses = (id) => {
  return db("userclass as uc")
    .join("users as u", "uc.userid", "u.id")
    .join("classes as c", "uc.classid", "c.id")
    .select("*")
    .where({ "uc.userid": id });
};

function findClassById(id) {
  return db("classes").where({ id }).first();
}

const enrollAClass = async (id, classId) => {
  await db("userclass").insert({ userid: id, classid: classId });

  return findClassById(classId);
};

const cancelAClass = (id, classId) => {
  return db("userclass")
    .where({ userid: id })
    .where({ classid: classId })
    .del();
};

const checkEnrollment = (userId, classId) => {
  return db("userclass")
    .select("*")
    .where({ userid: userId })
    .where({ classid: classId });
};

async function updateClass(classes, id) {
  await db("classes").update(classes).where({ id });
  return findById(id);
}
module.exports = {
  getAllClasses,
  getClientClasses,
  findClassById,
  enrollAClass,
  cancelAClass,
  checkEnrollment,
  updateClass,
};
