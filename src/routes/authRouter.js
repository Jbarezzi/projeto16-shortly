import { Router } from "express";
import { returnUserData, signin, signup } from "../controllers/authController.js";
import { validateSignin, checkIfUserExists, validateWithJoi, validateJwtToken, checkIfUserExistsById } from "./../middlewares/index.js";
import { signinUser, newUser } from "../schemas/authSchemas.js";

const authRouter = Router();

authRouter.post("/signup", validateWithJoi(newUser), checkIfUserExists, signup);
authRouter.post("/signin", validateWithJoi(signinUser), validateSignin, signin);
authRouter.get("/users/me", validateJwtToken, checkIfUserExistsById, returnUserData);

export default authRouter;