import { Router } from "express";
import limiter from "../middlewares/limiter";
import { WeatherControllers } from "../controllers/weather.controller";

const router = Router();

router.get('/temperature', limiter, WeatherControllers.getTemperature);

export const WeatherRoutes = router;