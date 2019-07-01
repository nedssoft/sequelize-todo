import express from 'express';

const router = express.Router();
import TodoController from './controllers/TodoController'
import TodoItemController from './controllers/TodoItemController'
const { create, getAllTodos, findById, deleteTodo } = TodoController;
const { addTodoItem } = TodoItemController

router.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the Todos API!',
}));

router.post('/todos', create)
router.get('/todos', getAllTodos)
router.get('/todos/:todoId', findById)
router.delete('/todos/:todoId', deleteTodo)
router.post('/todos/:todoId/todoItem', addTodoItem)
export default router;