const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const receiverRoutes = require('./receiver-routes');

router.use('/', homeRoutes);
router.use('/receivers', receiverRoutes)
router.use('/api', apiRoutes);

module.exports = router; 