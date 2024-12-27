import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.model";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await User.create(req.body);

    res.status(200).json({
      success: true,
      message: "User created successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserControllers = {
  createUser,
};
