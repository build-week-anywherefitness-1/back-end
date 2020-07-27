const router = require("express").Router();

const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("./auth-model");
const Instructor = require("./instructors-model");

router.get('/', async (req, res) => {
    try {
        const classes = await Instructor.getClasses();
        res.status(200).json(classes);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Error when retrieving classes" })
    }
})

router.get('/:id', (req, res) => {
    
})

router.post('/', (req, res) => {
    
})

router.put('/:id', (req, res) => {
    
})

router.delete('/:id', (req, res) => {
    
})