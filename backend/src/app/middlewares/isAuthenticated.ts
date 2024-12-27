import express, { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      _id?: string;
    }
  }
}
const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req?.cookies?.token || req?.headers?.authorization?.slice(7);
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decrypt = await jwt.verify(token, process.env.SECRET_KEY as string);
    if (!decrypt) {
      return res.status(401).json({ message: "Invalid token" });
    }
    next();
  } catch (error) {
    return res.status(401).json({ error: error });
  }
};
export default isAuthenticated;
