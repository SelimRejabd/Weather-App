import { Router } from "express";
import { AuthControllers } from "../controllers/auth.controller";

const router = Router();

router.post("/login", AuthControllers.loginUser);

router.post("/logout", AuthControllers.logoutUser);

export const AuthRoutes = router;
