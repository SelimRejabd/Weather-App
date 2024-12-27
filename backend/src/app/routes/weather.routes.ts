import { Router } from "express";
import limiter from "../middlewares/limiter";
import { WeatherControllers } from "../controllers/weather.controller";
import isAuthenticated from "../middlewares/isAuthenticated";

const router = Router();
router.get('/temperature-without-auth', limiter, WeatherControllers.getTemperature);

router.get('/temperature', isAuthenticated, limiter, WeatherControllers.getTemperature);

export const WeatherRoutes = router;