var middleware = require('../../middleware/middleware')
var express = require('express');
var router = express.Router();
var todoController = require('./controller/todoController');


router.get('/', middleware.authenticateToken, todoController.fetchTodos);
router.post('/', middleware.authenticateToken, todoController.createTodo);
router.patch('/', middleware.authenticateToken, todoController.updateTodo);
router.delete('/', middleware.authenticateToken, todoController.deleteTodo);

module.exports = router;