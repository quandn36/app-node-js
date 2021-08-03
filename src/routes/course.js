const express = require('express'); // require express
const router = express.Router(); // route này là của express
const courseController = require('../app/controllers/CourseController'); // use siteController vào để sử dụng
const trashController = require('../app/controllers/TrashController'); // use TrashController vào để sử dụng

// processing....
router.get('/manager/trash/remove/:id_remove', trashController.remove); // GET /course/manager/trash
router.get('/manager/trash/restore/:id_restore', trashController.restore); // GET /course/manager/trash
router.get('/manager/trash', trashController.trash); // GET /course/manager/trash
router.get('/manager/delete/:course_id', courseController.delete);
router.get('/manager/list', courseController.list);
router.get('/manager/:slug/edit', courseController.edit);
router.put('/update', courseController.update);
router.post('/store', courseController.store);
router.get('/create', courseController.create);
router.get('/:slug', courseController.show);

// export router
module.exports = router;
