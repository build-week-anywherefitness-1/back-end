const db = require("../../data/dbConfig");
const { select, distinct } = require("../../data/dbConfig");

const getAllClasses = () => {
  return db("classes").select("*").distinctOn("classname");
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
  return findById(classId);
};

const cancelAClass = (id, classId) => {
  return db("userclass").delete({ userid: id, classid: classId });
};

module.exports = {
  getAllClasses,
  getClientClasses,
  findClassById,
  enrollAClass,
  cancelAClass,
};
