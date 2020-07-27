const db = require('../data/dbConfig.js');

module.exports = {
    get,
    findById,
    addClass,
    updateClass,
    deleteClass,
};

function get() {
    return db('classes');
}

function findById(id) {
    return db('classes').where({ id }).first();
}

function addClass(classes) {
    return db('classes').insert(classes).returning('*');
}

async function updateClass(classes, id) {
    await db('classes').update(classes).where({ id });
    return findById(id);
}

function deleteClass(id) {
    return db('classes').where({ id }).del();
}