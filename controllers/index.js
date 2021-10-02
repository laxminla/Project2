const router = require('express').Router();
const globalRoutes = require('./globalRoutes');
const apiRoutes = require('./api')
router.use('/', globalRoutes);

module.exports = router;