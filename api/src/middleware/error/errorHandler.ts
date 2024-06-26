import { NextFunction, Request, Response } from "express";
import { HttpException } from "./utils";
import { logger } from "../../logs/logger";

export const errorHandler = (
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status || 500;
  const message = err.message || "서버 내부 오류";

  logger.error(`status: ${status}, message: ${message}, path: ${req.path}`);

  res.status(status).json({ status, message });

  next();
};
