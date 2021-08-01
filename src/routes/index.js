const siteRouter = require('./site');
const courseRouter = require('./course');

function route(app) {
    app.use('/course', courseRouter); // truy vap vao / dau tien trong course
    app.use('/', siteRouter); // truy cap vào / dau tien
}

module.exports = route;
