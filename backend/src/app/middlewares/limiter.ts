import { Request, Response } from "express";
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 1000,
  max: 100,
  message: {
    status: 429,
    error: "Too Many Requests",
    message: "You have exceeded the request limit. Please try again later.",
  },
  handler: (req: Request, res: Response) => {
    res.status(429).json({
      status: 429,
      error: "Too Many Requests",
      message: "You have exceeded the request limit. Please try again later.",
    });
  },
});

export default limiter;
