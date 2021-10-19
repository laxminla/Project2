const router = require('express').Router();
const consumerRoutes = require('./consumerRoutes');
const producerRoutes = require('./producerRoutes');
const itemsRoutes = require('./itemsRoutes');
const userRoutes = require('./userRoutes');

router.use('/consumer', consumerRoutes);
router.use('/producer', producerRoutes);
router.use('/items', itemsRoutes);
router.use('/user', userRoutes);

module.exports = router;