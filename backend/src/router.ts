import { Router } from "express";
import { WeatherRoutes } from "./app/routes/weather.routes";

const router = Router();

const moduleRoutes = [{
    path: '/',
    route: WeatherRoutes
}];

moduleRoutes.forEach((route) => router.use(route?.path, route?.route));

export default router;