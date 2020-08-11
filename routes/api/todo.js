const Todo = require('../../models/todo')
const express = require('express')
const router = express.Router()

//get all members
router.get('/', async (req, res) => {
    try {
        const allTodos = await Todo.find()
        res.status(200).json(allTodos)
    } catch (err) {
        res.status(500).json({ msg: `${err}` })
    }
})
//post one todo
router.post('/', async (req, res) => {
    const todo = new Todo({
        title: req.body.title,
        task: req.body.task
    })
    try {
        const savedTodo = await todo.save()
        res.status(202).json(savedTodo)
    } catch (err) {
        res.status(500).json({ msg: `${err}` })
    }
})
//delete

router.delete('/:id', async (req, res) => {
    try {
        const deletedTodo = await Todo.deleteOne({ _id: req.params.id })
        res.status(202).json(deletedTodo)
    } catch (err) {
        res.status(500).json({ msg: `${err}` })
    }
})

module.exports = router