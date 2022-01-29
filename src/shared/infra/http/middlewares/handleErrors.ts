import { NextFunction, Request, Response } from 'express';
import { AppError } from '@shared/errors/AppError';

export function handleErrors(
  err: AppError,
  request: Request,
  response: Response,
  next: NextFunction,
): Response {
  if (err instanceof AppError)
    return response.status(err.statusCode).json({ error: err.message });

  return response.status(500).json({ error: 'Internal server error' });
}
