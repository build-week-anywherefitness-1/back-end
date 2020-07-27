const db = require('../data/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    addClass,
    addClassToUser,
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

function findBy(filter) {
    return db('userclass')
        .select(
            'userclass.id as userclass_id',
            'users.username',
            'users.id as user_id',
            'classes.classname',
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
        .join('classes', 'userclass.classid', '=', 'class.id')
        .join('users', 'userclass.userId', '=', 'users.id')
        .where(filter);
}

async function add(user) {
    const [id] = await db('userclass').insert(user);

    return findById(id);
}

function findById(id) {
    return db('classes').where({ id }).first();
}

function addClass(classes) {
    return db('classes').insert(classes).returning('*');
}

function addClassToUser(id1, id2) {
    return db('userclass').insert({ userid: id1, classid: id2 });
}

async function updateClass(classes, id) {
    await db('classes').update(classes).where({ id });
    return findById(id);
}

function deleteClass(id) {
    return db('classes').where({ id }).del();
}