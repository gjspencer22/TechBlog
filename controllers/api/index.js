const router = require('express').Router();

const userRoutes = require('./user-routes');
const storyRoutes = require('./post-routes');
const contributionRoutes = require('./contribution-routes');

router.use('/users', userRoutes);
router.use('/posts', storyRoutes);
router.use('/contributions', contributionRoutes);

module.exports = router;