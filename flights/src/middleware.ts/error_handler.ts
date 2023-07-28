import express from "express";

export const errorHandler = (
  error: unknown,
  _req: express.Request,
  _res: express.Response,
  next: express.NextFunction
) => {
  if (error instanceof Error) {
    return _res.status(400).json({ error: error.message });
  }
  return next(error);
};
