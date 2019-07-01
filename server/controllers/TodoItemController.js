import db from "../models";
import d from 'debug'

const debug = d('TodoItem')
const { TodoItem, Todo } = db;
class TodoItemController {
  static async addTodoItem(req, res) {
    const { content } = req.body;
    const { todoId } = req.params;
    try {
      const todo = await Todo.findByPk(todoId);
      if (todo) {
        const todoItem = await todo.createTodoItem({ content });
        if (todoItem) {
          return res.status(201).json({ message: "Success", todoItem });
        } else return res.status(500).json({ message: "oops" });
      }
      return res.status(404).json({ message: "The Todo does not exist" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

export default TodoItemController;
