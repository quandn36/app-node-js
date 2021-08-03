const Course = require('../models/Course');

class TrashController {
    trash(req, res, next) {
        Course.findDeleted()
            .then((data) => {
                data = data.map((item) => { return item.toObject() });
                res.render('courses/trash', { courses: data });
            })
            .catch((err) => next(err));
    }
    restore(req, res, next) {
        Course.restore({ _id: req.params.id_restore })
            .then((data) => { res.redirect('/course/manager/trash') })
            .catch((err) => next(err));
    }
    remove(req, res, next) {
        Course.remove({ _id: req.params.id_remove })
            .then((data) => { res.redirect('/course/manager/trash') })
            .catch((err) => next(err));
    }
}

module.exports = new TrashController;
