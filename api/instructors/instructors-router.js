const router = require("express").Router();
const Instructor = require("./instructors-model");

router.get('/', async (req, res) => {
    try {
        const { userId } = req.jwt;
        const classes = await Instructor.getInstructorClasses(userId);
        res.status(200).json({ data: classes });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/all', async (req, res) => {
    try {
        const classes = await Instructor.getClasses()
        res.status(200).json({ data: classes })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const requestedClass = await Instructor.findById(req.params.id);
        res.status(200).json({ data: requestedClass });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const { userId } = req.jwt;
        const newClass = await Instructor.addClass(userId, req.body);

        res.status(201).json({ data: newClass });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const updatedClass = await Instructor.updateClass(req.body, req.params.id);
        res.status(200).json({ data: updatedClass });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.jwt;
        const deletedClass = await Instructor.deleteClass(id, userId);

        res.status(200).json({ removed: deletedClass });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

module.exports = router;