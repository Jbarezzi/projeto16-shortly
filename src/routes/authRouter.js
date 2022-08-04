import { Router } from "express";
import validateWithJoi from "../middlewares/validateWithJoi.js";
import checkIfUserExists from "../middlewares/auth/checkIfUserExists.js";
import signup from "../controllers/authController.js";
import { newUser } from "../schemas/authSchemas.js";

const authRouter = Router();

authRouter.post("/signup", validateWithJoi(newUser), checkIfUserExists, signup);
authRouter.post("/signin", )

export default authRouter;