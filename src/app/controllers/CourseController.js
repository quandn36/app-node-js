const Course = require('../models/Course');

class CourseController {
    show(req, res, next){
        // res.send(req.params.slug);
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                course = course ? course.toObject() : course;
                res.render('courses/course-detail', { course: course });
            })
            .catch((err) => next(err));
    }

    create(req, res, next){
        res.render('courses/create');
    }

    store(req, res, next){

        // tạo ra đối tượng cần lưu lại
        const new_course = new Course({ 
            name: req.body.course_name,
            descriptions: req.body.course_description,
            image: req.body.course_image,
        });

        // gọi phương thức save để lưu lại vào trong database
        new_course.save()
            .then((data) => {
                res.redirect('/');
            })
            .catch((err) => next(err));
        
    }
}

module.exports = new CourseController;
