import { Router } from "express";
import validateWithJoi from "./../middlewares/validateWithJoi";
import newUrl from "./../schemas/urlSchemas.js";

const urlRouter = Router();

urlRouter.post("/urls/shorten", validateWithJoi(newUrl));

export default urlRouter;