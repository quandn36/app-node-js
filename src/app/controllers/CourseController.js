const Course = require('../models/Course');

class CourseController {
    show(req, res, next){
        // res.send(req.params.slug);
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                course = course ? course.toObject() : course;
                res.render('course-detail', { course: course });
            })
            .catch((err) => next(err));
    }
}

module.exports = new CourseController;
