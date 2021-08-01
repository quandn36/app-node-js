const Cource = require('../models/Course');

class SiteController {
    index(req, res, next) {
        Cource.find({}) 
        .then( (courses) => {
            // do handlebars sửa lỗi bão mật thì dùng cách map để tạo lại 1 mãng mới
            courses = courses.map((course) => course.toObject());
            res.render('home', { courses:courses })
        })
        .catch( (error) => next(error));
        
    }
    news(req, res){
        
        res.render('news');  // route news page
    }
    search(req, res){
        res.render('search');
    }

}

module.exports = new SiteController;
