const Todo = require('../model/Todos')

module.exports = {
  fetchTodo: async (req, res) => {
    res.send('Fetch Todo Items')
  },

  createTodo: async (req, res) => {

    const {description, isCompleted } = req.body;
    let newTodo = await new Todo({
      userID: req.user.id,
      description,
      isCompleted,
    });
    let savedTodo = await newTodo.save();
    console.log('Todo Item:', newTodo);
    res.send(newTodo)
  }
  
}