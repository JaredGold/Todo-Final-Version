import { Request, Response, NextFunction } from 'express';
const db = require('../config/db');

export const getTodos = async (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const results = await db.query(`SELECT * FROM todos ORDER BY id`);
    res.status(200).json(results.rows);
  } catch (err) {
    next(err);
  }
};

export const getTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { todoId } = req.params;
  try {
    const results = await db.query(`SELECT * FROM todos WHERE id = ($1)`, [
      todoId,
    ]);
    res.status(200).json({
      result: results.rows[0],
      next: '/todo',
    });
  } catch (err) {
    next(err);
  }
};

export const createTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title } = req.body;
  try {
    const results = await db.query(
      `INSERT INTO todos (title) VALUES ($1) RETURNING *`,
      [title]
    );
    res.status(201).json({
      result: results.rows[0],
      next: '/getTodo/:id',
    });
  } catch (err) {
    next(err);
  }
};

export const updateTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { todoId } = req.params;
  const { title } = req.body;
  try {
    const results = await db.query(
      `UPDATE todos SET title = ($1) WHERE id = ($2) RETURNING *`,
      [title, todoId]
    );
    res.status(200).json({
      result: results.rows[0],
      next: '/getTodo/:id',
    });
  } catch (err) {
    next(err);
  }
};

export const checkTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { todoId } = req.params;
  const { checked } = req.body;
  try {
    const results = await db.query(
      `UPDATE todos SET checked = NOT checked WHERE id = ($1) RETURNING *`,
      [todoId]
    );
    res.status(200).json({
      result: results.rows[0],
      next: '/getTodo/:id',
    });
  } catch (err) {
    next(err);
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { todoId } = req.params;
  try {
    const results = await db.query(
      `DELETE FROM todos WHERE id = ($1) RETURNING *`,
      [todoId]
    );
    res.status(200).json({
      results: results.rows,
      next: '/',
    });
  } catch (err) {
    next(err);
  }
};
