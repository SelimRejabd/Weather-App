import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req?.body;

    let user = await User.findOne({ email: email });

    const isPasswordMatched = await bcrypt.compare(
      password,
      user?.password as string
    );

    if (!isPasswordMatched) {
      return res
        .status(400)
        .json({ message: "Invalid credentials", success: false });
    }

    const tokenData = {
      userId: user?._id,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY as string, {
      expiresIn: "1 days",
    });

    const userData = {
      name: user?.name,
      email: user?.email,
      token: token,
    };
    return res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + 86400000),
        secure: false,
        httpOnly: true,
      })
      .json({ message: "Login successful", success: true, userData });
  } catch (error) {
    next(error);
  }
};

const logoutUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.clearCookie("token");
    return res
      .status(200)
      .json({ message: "Logout successful", success: true });
  } catch (error) {
    next(error);
  }
};

export const AuthControllers = {
  loginUser,
  logoutUser,
};
