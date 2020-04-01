const router = require('express').Router();

router.use('/auth', require('./auth.routes'));
router.use('/users', require('./user.routes'));
router.use('/lists', require('./list.routes'));
router.use('/todos', require('./todo.routes'));

module.exports = router;
