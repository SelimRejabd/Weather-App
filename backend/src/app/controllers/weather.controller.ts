import { NextFunction, Request, Response } from "express";

const getTemperature = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const temperature = (Math.random() * (45 - 15) + 15).toFixed(2);
    const result = {
      temperature: temperature,
      unit : "Celsius",
      timestamp: new Date().toISOString(),
    };
    res.json({
      success: true,
      message: "Temperature data retrive successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const WeatherControllers = {
  getTemperature,
};
