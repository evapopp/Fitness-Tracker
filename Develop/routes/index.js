const router = require('express').Router();
const htmlRoute = require('./html');
const apiRoute = require('./api');

router.use('/', htmlRoute);
router.use('/api', apiRoute);

module.exports = router;