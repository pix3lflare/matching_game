const express = require('express');
const router = express.Router();
const todoController = require('./controller/todoController');
const middleware = require('../../middleware/authenticateToken');
/* GET todos listing. */


router.get('/', middleware.authenticateToken, todoController.fetchTodo);
router.post('/', middleware.authenticateToken, todoController.createTodo)
module.exports = router;