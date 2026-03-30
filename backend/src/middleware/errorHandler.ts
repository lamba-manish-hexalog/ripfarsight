import { Request, Response, NextFunction } from 'express';

export class AppError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
    this.name = 'AppError';
  }
}

export class ConflictError extends AppError {
  constructor(message: string) { super(409, message); }
}

export class BadRequestError extends AppError {
  constructor(message: string) { super(400, message); }
}

export class NotFoundError extends AppError {
  constructor(message: string) { super(404, message); }
}

export class ForbiddenError extends AppError {
  constructor(message: string) { super(403, message); }
}

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ message: err.message });
    return;
  }
  console.error('[Unhandled Error]', err);
  res.status(500).json({ message: 'Internal server error' });
};
