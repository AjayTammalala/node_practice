const express = require('express');
const router = express.Router();
const service = require ('../node_Practice/services');

router.get('/', (req, res) => {
    res.send(service.getAllCourses());
});

router.get('/:id', (req, res) => {
    const course = service.getCourseById(req.params.id);
    if (!course) return res.status(404).send('Course not found');
    res.send(course);
});

router.post('/', (req, res) => {
    const { error, course } = service.addCourse(req.body.name);
    if (error) return res.status(400).send(error);
    res.send(course);
});

router.put('/:id', (req, res) => {
    const { error, course } = service.updateCourse(req.params.id, req.body.name);
    if (error) return res.status(400).send(error);
    if (!course) return res.status(404).send('Course not found');
    res.send(course);
});

router.delete('/:id', (req, res) => {
    const course = service.deleteCourse(req.params.id);
    if (!course) return res.status(404).send('Course not found');
    res.send(course);
});

module.exports = router;
