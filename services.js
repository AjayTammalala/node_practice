let courses = [
    { id: 1, name: "n1" },
    { id: 2, name: "n2" },
    { id: 3, name: "n3" }
];

function getAllCourses() {
    return courses;
}

function getCourseById(id) {
    return courses.find(c => c.id === parseInt(id));
}

function addCourse(name) {
    if (!name || name.length < 3) {
        return { error: 'Name must be at least 3 characters.' };
    }
    const course = {
        id: courses.length + 1,
        name : name
    };
    courses.push(course);
    return { course };
}

function updateCourse(id, name) {
    const course = getCourseById(id);
    if (!course) return { course: null };

    if (!name || name.length < 3) {
        return { error: 'Name must be at least 3 characters.' };
    }

    course.name = name;
    return { course };
}

function deleteCourse(id) {
    const course = getCourseById(id);
    if (!course) return null;

    courses = courses.filter(c => c.id !== course.id);
    return course;
}

module.exports = {
    getAllCourses,
    getCourseById,
    addCourse,
    updateCourse,
    deleteCourse
};
