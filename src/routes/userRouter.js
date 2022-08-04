import { Router } from "express";
import validateWithJoi from "./../middlewares/validateWithJoi.js";
import checkIfUserExists from "./../middlewares/user/checkIfUserExists.js";
import signup from "./../controllers/userController.js";
import newUser from "./../schemas/userSchemas.js";

const userRouter = Router();

userRouter.post("/signup", validateWithJoi(newUser), checkIfUserExists, signup);

export default userRouter;