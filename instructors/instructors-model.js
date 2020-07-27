const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    addClass,
    updateClass,
    deleteClass,
};

function find() {
    return db('userclass')
        .select(
            'userclass.id as userclass_id',
            'users.username',
            'users.id as user_id',
            'classes.className',
            'classes.id as class_id',
            'classes.classtype',
            'classes.date',
            'classes.time',
            'classes.duration',
            'classes.location',
            'classes.intensityLevel',
            'classes.currentAttendeesNo',
            'classes.maxsize',
        )
        .join('classes', 'userclass.classid', '=', 'classes.id')
        .join('users', 'userclass.userid', '=', 'users.id');
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