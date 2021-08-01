const express           = require('express'); // require express
const router            = express.Router(); // route này là của express
const siteController    = require('../app/controllers/SiteController'); // use siteController vào để sử dụng

// processing....
router.get('/news', siteController.news);
router.get('/search', siteController.search);
router.get('/', siteController.index);

// export router
module.exports = router;
