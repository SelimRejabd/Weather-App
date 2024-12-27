import { Router } from "express";
import { WeatherRoutes } from "./app/routes/weather.routes";
import { UserRoutes } from "./app/routes/user.routes";
import { AuthRoutes } from "./app/routes/auth.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/weather",
    route: WeatherRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route?.path, route?.route));

export default router;
