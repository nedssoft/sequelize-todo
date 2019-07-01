import db from '../models'


const { Todo, TodoItem } = db;
class TodoController {
  static async create(req, res) {
    const { title } = req.body;
    try {
      const todo = await Todo.create({ title: title });
      return res.status(201).json({
        todo,
        message: 'success'
      })
    } catch(err) {
      return res.status(500).json({ message: 'internal server error'});
    }
  }

  static async getAllTodos(req, res) {
    try {
      const todos = await Todo.findAll({
        include: [
          {
            model: TodoItem,
            as: 'todoItems'
          }
        ]
      });
      return res.status(200).json({ todos })
    } catch (error) {
      return res.status(500).json({ message: 'internal server error'});
    }
  }
  static async findById(req, res) {
    try {
      const todo = await Todo.findByPk(req.params.todoId, {
        include: [
          {
            model: TodoItem,
            as: todoItems
          }
        ]
      });
      if (todo) {
        return res.status(200).json({ todo });
      }
      return res.status(404).json({ message: 'Not found' });
    } catch (error) {
      return res.status(500).json({ message: 'internal server error'});
    }
  }
  static async deleteTodo(req, res) {
    try {
      const todo = await Todo.findByPk(req.params.todoId)
      if (todo) {
        const deleted = await todo.destroy();
        if (deleted) {
          return res.status(200).json({ message: 'Todo deleted'})
        }
      }
      return res.status(404).json({ message: 'Todo not found'})
    } catch (error) {
      return res.status(500).json({ message: 'Todo not found'})
    }
  }
}
export default TodoController;


