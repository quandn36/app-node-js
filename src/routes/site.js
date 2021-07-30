const express           = require('express'); // require express
const router            = express.Router(); // route này là của express
const siteController    = require('../app/controllers/SiteController'); // use siteController vào để sử dụng

// processing....
router.use('/news', siteController.news);
router.use('/search', siteController.search);
router.use('/', siteController.index);

// export router
module.exports = router;
