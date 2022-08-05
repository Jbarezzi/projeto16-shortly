import { Router } from "express";
import { signin, signup } from "../controllers/authController.js";
import { validateSignin, checkIfUserExists, validateWithJoi } from "./../middlewares/index.js";
import { signinUser, newUser } from "../schemas/authSchemas.js";

const authRouter = Router();

authRouter.post("/signup", validateWithJoi(newUser), checkIfUserExists, signup);
authRouter.post("/signin", validateWithJoi(signinUser), validateSignin, signin);

export default authRouter;