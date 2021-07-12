const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const contributionRoutes = require('./contribution-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/contributions', contributionRoutes);

module.exports = router;