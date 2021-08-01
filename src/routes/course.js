const express = require('express'); // require express
const router = express.Router(); // route này là của express
const courseController = require('../app/controllers/CourseController'); // use siteController vào để sử dụng

// processing....
router.post('/store', courseController.store);
router.get('/create', courseController.create);
router.get('/:slug', courseController.show);

// export router
module.exports = router;
