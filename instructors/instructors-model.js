const db = require('../data/dbConfig.js');

module.exports = {
    addClass,
    getClasses,
    getClassById
}

async function addClass(classes) {
    return await db('classes')
        .insert(class)
}

async function getClasses() {
    return await db('classes');
}

const getClassById = (id) => {
    return db("users").where({ id }).first();
  };