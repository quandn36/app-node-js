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

    list(req, res, next){
        Course.find() 
        .then( (courses) => {
            // do handlebars sửa lỗi bão mật thì dùng cách map để tạo lại 1 mãng mới
            courses = courses.map((course) => course.toObject());
            res.render('courses/list', { courses:courses });
        })
        .catch( (error) => next(error));
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

    edit(req, res, next){
        Course.findOne({ slug: req.params.slug})
            .then((course) => {
                course = course ? course.toObject() : course;
                res.render('courses/edit', { course: course });
            })
            .catch((err) => next(err));
    }

    update(req, res, next){
        Course.updateOne({ _id: req.body.id }, {
            name: req.body.course_name,
            descriptions: req.body.course_description,
            image: req.body.course_image,
        })
            .then((data) => { res.redirect('/') })
            .catch((err) => next(err));
    }

    delete(req, res, next){
        Course.delete({ _id: req.params.course_id })
            .then((data) => { res.redirect('/course/manager/list') })
            .catch((err) => next(err));
    }
    
}

module.exports = new CourseController;
