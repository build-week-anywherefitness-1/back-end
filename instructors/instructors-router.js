const router = require("express").Router();
const Instructor = require("./instructors-model");

router.get('/', async (req, res) => {
    try {
        const classes = await Instructor.get();
        res.status(200).json(classes);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Error retrieving classes" })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const requestedClass = await Instructor.findById(req.params.id);
        res.status(200).json(requestedClass);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Error retrieving class" })
    }
})

router.post('/', async (req, res) => {
    try {
        const newClass = await Instructor.addClass(req.body);
        res.status(200).json(newClass);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Error adding class" })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const newClass = await Instructor.updateClass(req.body, req.params.id);
        res.status(200).json(newClass);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Error editing class" })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deletedClass = await Instructor.deleteClass(req.params.id);
        res.status(200).json(deletedClass);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Error deleting class" });
    }
})

module.exports = router;