const express = require('express'); // require express
const router = express.Router(); // route này là của express
const courseController = require('../app/controllers/CourseController'); // use siteController vào để sử dụng

// processing....
router.get('/manager/list', courseController.list);
router.get('/manager/:slug/edit', courseController.edit);
router.put('/update', courseController.update);
router.post('/store', courseController.store);
router.get('/create', courseController.create);
router.get('/:slug', courseController.show);

// export router
module.exports = router;
