const siteRouter        = require('./site');

function route(app) {
    app.use('/', siteRouter); // truy cap vào / dau tien
}

module.exports = route;
