const router = require('express').Router();
const controllers = require('../../controllers/list.controllers.js');

router
  .route('/')
  .get(controllers.getAll)
  .post(controllers.create);

router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.deleteOne);

router
  .route('/:id/todos')
  .get(controllers.getTodos)
  .post(controllers.addTodo);

module.exports = router;
