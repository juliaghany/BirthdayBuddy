// reference Module 14 Activity 17 controllers -> api -> index.js
const router = require('express').Router();
const userRoutes = require('./user-routes');
const receiverRoutes = require('./receiver-routes');
const giftRoutes = require('./gift-routes');

router.use('/users', userRoutes);
router.use('/receivers', receiverRoutes);
router.use('/gifts', giftRoutes);


module.exports = router;