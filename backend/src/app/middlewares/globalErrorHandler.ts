import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);
  res.status(500).json({
    status: 500,
    success: false,
    message: "An unexpected error occurred. Please try again later.",
    error: err,
  });
};

export default globalErrorHandler;
