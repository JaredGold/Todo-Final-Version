import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { HttpException } from "../exceptions/HttpException"

export const errorHandler = (err: HttpException, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    res.status(err.status).json({
      error: err.message,
    });
  }
}

