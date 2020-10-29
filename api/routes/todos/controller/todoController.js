const Todo = require('../model/Todo');

module.exports = {

    fetchTodos: async (req, res) => {
        let todoItems = await Todo.find({userID: req.user.id});
        res.send(todoItems)
    },

    createTodo: async (req, res) => {
        const { description, isComplete } = req.body
        let newTodo = await new Todo({
            userID: req.user.id,
            description,
            isComplete,
        });
        let savedTodo = await newTodo.save();
        res.send(savedTodo);
    },

    updateTodo: async (req, res) => {
        const { _id, description, isComplete } = req.body
        const updateResp = await Todo.updateOne({ _id}, {description, isComplete});
        res.send(updateResp);
    },

}