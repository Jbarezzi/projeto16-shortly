import { Router } from "express";
import validateWithJoi from "@middlewares/validateWithJoi";
import checkIfUserExists from "@middlewares/user/checkIfUserExists";
import signup from "@controllers/userController";
import newUser from "@schemas/userSchemas";

const userRouter = Router();

userRouter.post("/signup", validateWithJoi(newUser), checkIfUserExists, signup);

export default userRouter;