const router = require('express').Router();
const consumerRoutes = require('./consumerRoutes');
const producerRoutes = require('./producerRoutes');
const itemsRoutes = require('./itemsRoutes');

router.use('/consumer', consumerRoutes);
router.use('/producer', producerRoutes);
router.use('/items', itemsRoutes);

module.exports = router;