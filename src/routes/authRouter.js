import { Router } from "express";
import validateWithJoi from "../middlewares/validateWithJoi.js";
import checkIfUserExists from "../middlewares/auth/checkIfUserExists.js";
import { signin, signup } from "../controllers/authController.js";
import { signinUser, newUser } from "../schemas/authSchemas.js";
import validateSignin from "../middlewares/auth/validateSignin.js";

const authRouter = Router();

authRouter.post("/signup", validateWithJoi(newUser), checkIfUserExists, signup);
authRouter.post("/signin", validateWithJoi(signinUser), validateSignin, signin);

export default authRouter;