import { Router } from "express";
import { UserControllers } from "../controllers/user.controller";

const router = Router();

router.post('/create', UserControllers.createUser);


export const UserRoutes =  router;