import { Router } from 'express';
import { Request, Response } from 'express';
import {
  getTodos,
  createTodo,
  getTodo,
  updateTodo,
  checkTodo,
  deleteTodo,
} from '../controllers/Todo';

const todoRoutes = Router();

// Get all todos
todoRoutes.get('/', getTodos);

// Get one todo
todoRoutes.get('/todo/:todoId', getTodo);

// Create a todo
todoRoutes.post('/todo', createTodo);

// Updates a todo's metadata (title, description, image, etc.)
todoRoutes.put('/todo/update/:todoId', updateTodo);

// Updates the checked state of a todo
todoRoutes.put('/todo/check/:todoId', checkTodo);

// Delete a todo
todoRoutes.delete('/todo/:todoId', deleteTodo);

// Catches all other routes pointing the user to the default route
todoRoutes.all('*', (_: Request, res: Response) => {
  res.status(404).json({
    message: `Route not found. Please check the url and try again.`,
    next: "'/' to get all todos",
  });
});

export default todoRoutes;
