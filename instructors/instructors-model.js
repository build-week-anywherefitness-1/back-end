const db = require('../data/dbConfig.js');

module.exports = {
    addClass,
    getClasses,
    getClassById
}

async function addClass(project) {
    return await db('projects')
        .insert(project)
}

async function getClasses() {
    return await db('projects');
}

const getClassById = (id) => {
    return db("users").where({ id }).first();
  };