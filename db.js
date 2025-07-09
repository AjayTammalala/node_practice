const express = require('express');
const app = express();

app.use(express.json()); 
let courses = [
    { id: 1, name: "n1" },
    { id: 2, name: "n2" },
    { id: 3, name: "n3" }
];

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('Course not found.');
    res.send(course);
});

app.post('/api/courses', (req, res) => {
    if (!req.body.name || req.body.name.length < 3) {
        return res.status(400).send('Name is required and should be at least 3 characters.');
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('Course not found.');

    if (!req.body.name || req.body.name.length < 3) {
        return res.status(400).send('Name is required and should be at least 3 characters.');
    }

    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('Course not found.');

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course); 
});

const port = 3000;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
