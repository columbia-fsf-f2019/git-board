const router = require('express').Router();
const controllers = require('../../controllers/todo.controllers.js');

router
  .route('/')
  .get(controllers.getAll)
  .post(controllers.create);

router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.deleteOne);

module.exports = router;
