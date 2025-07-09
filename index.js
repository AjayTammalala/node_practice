const express = require('express');
const app = express();

app.use(express.json());

const courseRoutes = require('./routes.js');
app.use('/api/courses', courseRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}/api/courses`);
});
